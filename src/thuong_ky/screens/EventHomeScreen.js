import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { categories, upcomingEvents, nearbyEvents } from '../data/eventsData';
import SideDrawerMenu from '../components/SideDrawerMenu';
import FilterModal from '../components/FilterModal';
import InviteFriendModal from '../components/InviteFriendModal';

export default function EventHomeScreen({
  onSelectEvent,
  onGoToSearch,
  onGoToMap,
  onGoToSeeAll,
  onGoToProfile,
  onGoToNotifications,
  onLogout,
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('explore');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  const filteredUpcoming = upcomingEvents.filter((item) => {
    const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#4E65FF" />

      {/* SIDE DRAWER MENU */}
      <SideDrawerMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSignOut={onLogout}
        onNavigate={(tab) => {
          if (tab === 'profile') onGoToProfile();
          if (tab === 'calendar') setActiveTab('events');
        }}
      />

      {/* FILTER MODAL SHEET */}
      <FilterModal
        visible={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApply={() => setIsFilterOpen(false)}
      />

      {/* INVITE FRIEND MODAL */}
      <InviteFriendModal
        visible={isInviteOpen}
        onClose={() => setIsInviteOpen(false)}
      />

      <View style={{ flex: 1 }}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* TOP BLUE HEADER */}
          <View style={styles.topHeaderBlue}>
            {/* Hamburger Menu, Location & Notification */}
            <View style={styles.headerRow}>
              <TouchableOpacity
                style={styles.menuHamburgerBtn}
                onPress={() => setIsDrawerOpen(true)}
                activeOpacity={0.7}
              >
                <Ionicons name="menu-outline" size={26} color="#FFFFFF" />
              </TouchableOpacity>

              <View style={{ alignItems: 'center' }}>
                <Text style={styles.locSubText}>Current Location ▾</Text>
                <Text style={styles.locTitleText}>New York, USA</Text>
              </View>

              <TouchableOpacity
                style={styles.iconCircleBtn}
                onPress={onGoToNotifications}
                activeOpacity={0.8}
              >
                <Ionicons name="notifications-outline" size={20} color="#FFFFFF" />
                <View style={styles.notifBadge} />
              </TouchableOpacity>
            </View>

            {/* Search Bar & Filter */}
            <View style={styles.searchRow}>
              <TouchableOpacity
                style={styles.searchInputContainer}
                onPress={onGoToSearch}
                activeOpacity={0.9}
              >
                <Ionicons name="search-outline" size={20} color="#9CA3AF" />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search..."
                  placeholderTextColor="#9CA3AF"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  onFocus={onGoToSearch}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.filterBtn}
                onPress={() => setIsFilterOpen(true)}
              >
                <Ionicons name="options-outline" size={18} color="#FFFFFF" />
                <Text style={styles.filterBtnText}>Filters</Text>
              </TouchableOpacity>
            </View>

            {/* Horizontal Categories */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesRow}
            >
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <TouchableOpacity
                    key={cat.id}
                    style={[
                      styles.categoryChip,
                      { backgroundColor: isSelected ? '#FFFFFF' : cat.color },
                    ]}
                    onPress={() => setSelectedCategory(cat.id)}
                    activeOpacity={0.8}
                  >
                    <Ionicons
                      name={cat.icon}
                      size={16}
                      color={isSelected ? cat.color : '#FFFFFF'}
                    />
                    <Text
                      style={[
                        styles.categoryChipText,
                        { color: isSelected ? cat.color : '#FFFFFF' },
                      ]}
                    >
                      {cat.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          {/* SECTION 1: UPCOMING EVENTS */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Events</Text>
            <TouchableOpacity onPress={onGoToSeeAll}>
              <Text style={styles.seeAllText}>See All ▸</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalEventsRow}
          >
            {filteredUpcoming.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.eventCardHorizontal}
                onPress={() => onSelectEvent(item)}
                activeOpacity={0.85}
              >
                <View style={styles.imageContainer}>
                  <Image source={{ uri: item.image }} style={styles.eventImage} />
                  <View style={styles.dateBadgeOverlay}>
                    <Text style={styles.dateDayText}>{item.date.split(' ')[0]}</Text>
                    <Text style={styles.dateMonthText}>{item.date.split(' ')[1]}</Text>
                  </View>
                  <TouchableOpacity style={styles.bookmarkBtn}>
                    <Ionicons name="bookmark" size={16} color="#F5A623" />
                  </TouchableOpacity>
                </View>

                <View style={styles.eventCardBody}>
                  <Text style={styles.eventTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text style={styles.goingText}>{item.goingCount}</Text>
                  <View style={styles.locRow}>
                    <Ionicons name="location-outline" size={14} color="#6B7280" />
                    <Text style={styles.locText} numberOfLines={1}>
                      {item.location}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* PROMO BANNER: INVITE YOUR FRIENDS */}
          <View style={styles.promoBannerCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.promoTitle}>Invite your friends</Text>
              <Text style={styles.promoSub}>Get $20 for ticket</Text>
              <TouchableOpacity
                style={styles.inviteBtn}
                onPress={() => setIsInviteOpen(true)}
              >
                <Text style={styles.inviteBtnText}>INVITE</Text>
              </TouchableOpacity>
            </View>
            <Ionicons name="gift-outline" size={56} color="#00F0FF" />
          </View>

          {/* SECTION 2: NEARBY YOU */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Nearby You</Text>
            <TouchableOpacity onPress={onGoToSeeAll}>
              <Text style={styles.seeAllText}>See All ▸</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.verticalListContainer}>
            {nearbyEvents.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.eventCardVertical}
                onPress={() => onSelectEvent(item)}
                activeOpacity={0.85}
              >
                <View style={styles.vertIconBox}>
                  <Ionicons name="calendar-outline" size={24} color="#5669FF" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.vertDateText}>
                    {item.date} • {item.time}
                  </Text>
                  <Text style={styles.vertTitleText}>{item.title}</Text>
                  <Text style={styles.vertLocText}>{item.location}</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* BOTTOM TAB NAVIGATION BAR WITH FLOATING ADD BUTTON */}
        <View style={styles.bottomTabBar}>
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => setActiveTab('explore')}
          >
            <Ionicons
              name={activeTab === 'explore' ? 'compass' : 'compass-outline'}
              size={22}
              color={activeTab === 'explore' ? '#5669FF' : '#9CA3AF'}
            />
            <Text
              style={[
                styles.tabLabel,
                activeTab === 'explore' && styles.tabLabelActive,
              ]}
            >
              Explore
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            onPress={onGoToSeeAll}
          >
            <Ionicons
              name={activeTab === 'events' ? 'calendar' : 'calendar-outline'}
              size={22}
              color={activeTab === 'events' ? '#5669FF' : '#9CA3AF'}
            />
            <Text
              style={[
                styles.tabLabel,
                activeTab === 'events' && styles.tabLabelActive,
              ]}
            >
              Events
            </Text>
          </TouchableOpacity>

          {/* FLOATING ADD BUTTON IN CENTER */}
          <TouchableOpacity style={styles.floatingAddBtn} activeOpacity={0.85}>
            <Ionicons name="add" size={28} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            onPress={onGoToMap}
          >
            <Ionicons
              name={activeTab === 'map' ? 'location' : 'location-outline'}
              size={22}
              color={activeTab === 'map' ? '#5669FF' : '#9CA3AF'}
            />
            <Text
              style={[
                styles.tabLabel,
                activeTab === 'map' && styles.tabLabelActive,
              ]}
            >
              Map
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            onPress={onGoToProfile}
          >
            <Ionicons
              name={activeTab === 'profile' ? 'person' : 'person-outline'}
              size={22}
              color={activeTab === 'profile' ? '#5669FF' : '#9CA3AF'}
            />
            <Text
              style={[
                styles.tabLabel,
                activeTab === 'profile' && styles.tabLabelActive,
              ]}
            >
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#4E65FF' },
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  contentContainer: { paddingBottom: 80 },

  topHeaderBlue: {
    backgroundColor: '#4E65FF',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  menuHamburgerBtn: { padding: 4 },
  locSubText: { fontSize: 11, color: 'rgba(255, 255, 255, 0.7)' },
  locTitleText: { fontSize: 15, fontWeight: '800', color: '#FFFFFF', marginTop: 1 },
  iconCircleBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notifBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00F0FF',
    position: 'absolute',
    top: 8,
    right: 8,
  },

  searchRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 44,
  },
  searchInput: { flex: 1, marginLeft: 8, fontSize: 14, color: '#1F2937' },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5669FF',
    paddingHorizontal: 14,
    borderRadius: 14,
    gap: 6,
  },
  filterBtnText: { color: '#FFFFFF', fontWeight: '700', fontSize: 13 },

  categoriesRow: { gap: 10 },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  categoryChipText: { fontSize: 13, fontWeight: '700' },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#120D26' },
  seeAllText: { fontSize: 13, color: '#747688', fontWeight: '600' },

  horizontalEventsRow: { paddingLeft: 20, gap: 16 },
  eventCardHorizontal: {
    width: 220,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  imageContainer: { height: 130, borderRadius: 14, overflow: 'hidden', position: 'relative' },
  eventImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  dateBadgeOverlay: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
  },
  dateDayText: { fontSize: 13, fontWeight: '900', color: '#F06354' },
  dateMonthText: { fontSize: 8, fontWeight: '700', color: '#6B7280' },
  bookmarkBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    padding: 6,
  },

  eventCardBody: { marginTop: 10 },
  eventTitle: { fontSize: 15, fontWeight: '800', color: '#120D26' },
  goingText: { fontSize: 12, fontWeight: '700', color: '#5669FF', marginTop: 4 },
  locRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4, gap: 4 },
  locText: { fontSize: 12, color: '#747688', flex: 1 },

  promoBannerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D6F7FF',
    borderRadius: 18,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 16,
  },
  promoTitle: { fontSize: 16, fontWeight: '800', color: '#120D26' },
  promoSub: { fontSize: 12, color: '#5669FF', marginVertical: 4, fontWeight: '600' },
  inviteBtn: {
    backgroundColor: '#00F0FF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  inviteBtnText: { color: '#0F172A', fontWeight: '800', fontSize: 11 },

  verticalListContainer: { paddingHorizontal: 20, gap: 12 },
  eventCardVertical: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 12,
  },
  vertIconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vertDateText: { fontSize: 12, fontWeight: '700', color: '#5669FF' },
  vertTitleText: { fontSize: 14, fontWeight: '800', color: '#120D26', marginTop: 2 },
  vertLocText: { fontSize: 12, color: '#747688', marginTop: 2 },

  bottomTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  tabItem: { alignItems: 'center', flex: 1 },
  tabLabel: { fontSize: 10, color: '#9CA3AF', fontWeight: '600', marginTop: 2 },
  tabLabelActive: { color: '#5669FF', fontWeight: '800' },
  floatingAddBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#5669FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -28,
    shadowColor: '#5669FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
});
