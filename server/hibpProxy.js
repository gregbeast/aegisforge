const express = require('express');
const router = express.Router();

// Sample breach data to use in our random selections
const BREACHES_FAKE = [
  {
    Name: "MegaBreach",
    Title: "MegaBreach Data Leak",
    BreachDate: "2023-10-27",
    PwnCount: 18000,
    DataClasses: ["Email addresses", "Passwords"],
    Description: "MegaBreach exposed user account data in October 2023, affecting millions of users worldwide."
  },
  {
    Name: "SocialNet",
    Title: "SocialNet Platform Breach",
    BreachDate: "2022-08-16",
    PwnCount: 3500,
    DataClasses: ["Email addresses", "Usernames"],
    Description: "Popular social media platform SocialNet experienced a security incident exposing user profile information."
  },
  {
    Name: "CloudStore",
    Title: "CloudStore Security Incident",
    BreachDate: "2023-05-12",
    PwnCount: 12500,
    DataClasses: ["Email addresses", "Passwords", "Credit card data"],
    Description: "Cloud storage provider CloudStore suffered a breach that potentially exposed customer payment information."
  },
  {
    Name: "GameZone",
    Title: "GameZone Player Database Leak",
    BreachDate: "2021-11-03",
    PwnCount: 7600,
    DataClasses: ["Email addresses", "Usernames", "Passwords"],
    Description: "Gaming platform GameZone experienced unauthorized access to their player database."
  },
  {
    Name: "ShopMart",
    Title: "ShopMart Customer Data Breach",
    BreachDate: "2022-12-19",
    PwnCount: 15200,
    DataClasses: ["Email addresses", "Physical addresses", "Phone numbers"],
    Description: "Online retailer ShopMart discovered customer contact information was exposed due to a misconfigured database."
  },
  {
    Name: "TravelApp",
    Title: "TravelApp User Data Exposure",
    BreachDate: "2023-02-28",
    PwnCount: 5800,
    DataClasses: ["Email addresses", "Passwords", "IP addresses"],
    Description: "Travel booking application TravelApp suffered a breach exposing user login details and travel histories."
  },
  {
    Name: "FitnessTracker",
    Title: "FitnessTracker Health Data Breach",
    BreachDate: "2022-04-10",
    PwnCount: 9300,
    DataClasses: ["Email addresses", "Dates of birth", "IP addresses"],
    Description: "Fitness application exposed sensitive health metrics and user account information."
  },
  {
    Name: "EducationPortal",
    Title: "EducationPortal Student Records Breach",
    BreachDate: "2021-09-22",
    PwnCount: 4100,
    DataClasses: ["Email addresses", "Usernames", "Dates of birth"],
    Description: "Online learning platform EducationPortal experienced unauthorized access to student information."
  },
  {
    Name: "StreamingService",
    Title: "StreamingService Account Breach",
    BreachDate: "2023-07-05",
    PwnCount: 21000,
    DataClasses: ["Email addresses", "Passwords", "IP addresses", "Phone numbers"],
    Description: "Popular streaming service reported a security incident affecting subscriber account details."
  },
  {
    Name: "BankingSystem",
    Title: "BankingSystem Security Incident",
    BreachDate: "2022-01-17",
    PwnCount: 6700,
    DataClasses: ["Email addresses", "Phone numbers", "IP addresses"],
    Description: "Banking application BankingSystem reported suspicious activity potentially exposing customer contact information."
  }
];

// OS options for random selection
const OS_OPTIONS = [
  "iOS 17",
  "iOS 16.5",
  "Android 14",
  "Android 13",
  "Windows 11",
  "Windows 10",
  "macOS Ventura",
  "macOS Sonoma",
  "Linux Ubuntu 23.04"
];

// Permission options for random selection
const PERMISSION_OPTIONS = [
  "Camera",
  "Microphone",
  "Location",
  "Contacts",
  "Calendar",
  "Photos",
  "Storage",
  "Bluetooth",
  "Notifications",
  "Background App Refresh"
];

// Patch options for random selection
const PATCH_OPTIONS = [
  "Jan 2024 security patch",
  "Feb 2024 security patch",
  "Mar 2024 security patch",
  "Critical vulnerability fix (CVE-2024-1234)",
  "System stability update",
  "Privacy enhancement update",
  "Security framework update",
  "Kernel security patch"
];

// WiFi encryption options
const ENCRYPTION_OPTIONS = ["WPA3", "WPA2", "WPA", "WEP", "None"];

// Function to get random items from an array
function getRandomItems(array, min = 1, max = 3) {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Function to get random breaches
function getRandomBreaches() {
  // Decide if we want to return breaches at all (70% chance)
  if (Math.random() < 0.7) {
    const count = Math.floor(Math.random() * 3) + 1; // 1-3 breaches
    return getRandomItems(BREACHES_FAKE, 1, 3);
  }
  return []; // No breaches found
}

// Generate random device info
function getRandomDeviceInfo() {
  return {
    os: OS_OPTIONS[Math.floor(Math.random() * OS_OPTIONS.length)],
    patches: getRandomItems(PATCH_OPTIONS, 0, 3),
    rootStatus: Math.random() < 0.2, // 20% chance of rooted/jailbroken
    permissions: getRandomItems(PERMISSION_OPTIONS, 2, 6)
  };
}

// Generate random WiFi info
function getRandomWifiInfo() {
  return {
    encryption: ENCRYPTION_OPTIONS[Math.floor(Math.random() * ENCRYPTION_OPTIONS.length)],
    isPublic: Math.random() < 0.3 // 30% chance of public WiFi
  };
}

// Generate random password info
function getRandomPasswordInfo() {
  const compromised = Math.random() < 0.6; // 60% chance of compromised
  return {
    compromised,
    count: compromised ? Math.floor(Math.random() * 1000) + 1 : 0
  };
}

// Define consistent recommendation keys that match the translation files
const LOW_SCORE_RECOMMENDATIONS = [
  "change_your_password_immediately",
  "enable_2fa_on_all_accounts",
  "review_recent_account_activity",
  "use_a_password_manager",
  "check_for_software_updates",
  "avoid_using_public_wifi",
  "install_a_security_app"
];

const MEDIUM_SCORE_RECOMMENDATIONS = [
  "consider_updating_your_password",
  "enable_2fa_where_available",
  "check_privacy_settings_on_your_accounts",
  "keep_your_software_updated",
  "be_cautious_with_public_wifi"
];

const HIGH_SCORE_RECOMMENDATIONS = [
  "great_job_continue_monitoring_your_accounts",
  "regularly_check_for_new_security_features", 
  "consider_a_security_audit_every_few_months",
  "keep_your_current_security_practices"
];

router.post('/scan/email', (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email required" });

  // Generate random security score (60-100)
  const score = Math.floor(Math.random() * 41) + 60;
  
  // Generate recommendations based on score using recommendation keys
  let recommendationKeys = [];
  if (score < 70) {
    recommendationKeys = getRandomItems(LOW_SCORE_RECOMMENDATIONS, 2, 4);
  } else if (score < 90) {
    recommendationKeys = getRandomItems(MEDIUM_SCORE_RECOMMENDATIONS, 1, 3);
  } else {
    recommendationKeys = getRandomItems(HIGH_SCORE_RECOMMENDATIONS, 1, 2);
  }

  // Build our complete response
  const result = {
    score,
    recommendations: recommendationKeys,
    breaches: getRandomBreaches(),
    password: getRandomPasswordInfo(),
    wifi: getRandomWifiInfo(),
    device: getRandomDeviceInfo()
  };

  res.json(result);
});

module.exports = router;