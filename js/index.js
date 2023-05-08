/**
 * Product A info
 */
const productA = {
  emoji: "⭐",
  revenue: 200,
  commision: 50,
};

/**
 * Product B info
 */
const productB = {
  emoji: "🔥",
  revenue: 300,
  commision: 75,
};

/**
 * Variables
 */
const white = "#fbfbfb";
const black = "#201a23";
let liveSales = 0;
let totalRevenue = 0;
let totalCommission = 0;
let achieved = false;

/**
 * DOM Variables
 */
const containerEl = document.getElementById("container");
const liveAchievementsEl = document.getElementById("live-achievements");
const liveAchievementsHistoryEl = document.getElementById(
  "live-achievements-history"
);
const totalRevenueEl = document.getElementById("total-revenue");
const totalCommissionEl = document.getElementById("total-commission");

/**
 * Event handlers
 */
document.getElementById("star-btn").addEventListener("click", function () {
  updateUI(this);
});
document.getElementById("fire-btn").addEventListener("click", function () {
  updateUI(this);
});
document.getElementById("reset-btn").addEventListener("click", function () {
  reset(this);
});
document
  .getElementById("theme-selector")
  .addEventListener("click", function () {
    changeTheme(this);
  });

/**
 * Update the user interface of the app
 */
function updateUI(btn) {
  updateLiveSales(btn);
  updateTotals(btn);
  updateLiveAchievements(btn);
}

/**
 * Upadtes Live Sales (quantity and history)
 */
function updateLiveSales(btn) {
  const liveSalesEl = document.getElementById("live-sales");
  const liveSalesHistoryEl = document.getElementById("live-sales-history");
  if (btn.id != "reset-btn") {
    // increase the amount of sales
    liveSales += 1;
  }
  // update the UI
  liveSalesEl.innerText = liveSales;
  if (btn.id != "reset-btn") {
    liveSalesHistoryEl.innerText += btn.innerText;
  } else {
    liveSalesHistoryEl.innerText = "";
  }
}

/**
 * Upadtes Totals (revenue and commission)
 */
function updateTotals(btn) {
  let revenue = 0;
  let commission = 0;

  if (btn.id === "star-btn") {
    revenue = productA.revenue;
    commission = productA.commision;
  } else if (btn.id === "fire-btn") {
    revenue = productB.revenue;
    commission = productB.commision;
  }
  totalRevenue += revenue;
  totalCommission += commission;
  totalRevenueEl.innerText = `$${totalRevenue}`;
  totalCommissionEl.innerText = `$${totalCommission}`;
}

/**
 * Updates Live Achievements (quantity and history)
 */
function updateLiveAchievements(btn) {
  if (liveSales === 1) {
    liveAchievementsEl.innerText = "1";
    liveAchievementsHistoryEl.innerText = "🔔";
  }
  if (totalRevenue >= 2500 && !achieved) {
    liveAchievementsEl.innerText = "2";
    liveAchievementsHistoryEl.innerText = "🔔💰";
    achieved = true;
  }
  if (liveSales === 15) {
    liveAchievementsEl.innerText = "3";
    liveAchievementsHistoryEl.innerText = "🔔💰🏆";
  }
  if (btn.id === "reset-btn") {
    liveAchievementsEl.innerText = "0";
    liveAchievementsHistoryEl.innerText = "";
  }
}

/**
 * Reset the app
 */
function reset(btn) {
  liveSales = 0;
  totalRevenue = 0;
  totalCommission = 0;
  achieved = false;
  updateUI(btn);
}

/**
 * Change Theme
 */
function changeTheme(link) {
  if (link.innerText === "Light Theme") {
    containerEl.style.background = white;
    containerEl.style.color = black;
    totalRevenueEl.style.color = white;
    totalCommissionEl.style.color = white;
    link.innerText = "Dark Theme";
  } else {
    containerEl.style.background = black;
    containerEl.style.color = white;
    link.innerText = "Light Theme";
  }
}
