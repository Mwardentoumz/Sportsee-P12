import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "./mockedData";

const ACTIVITY_BY_KIND = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};

export default class MockedAPI {
  /**
   * @returns {array.Object}
   */
  get defaultActivities() {
    const activities = [];

    for (let key in ACTIVITY_BY_KIND) {
      activities.push({
        activity: ACTIVITY_BY_KIND[key],
        value: 0,
      });
    }

    return activities;
  }

  /**
   * @returns {array.Object}
   */
  get defaultAverageSessions() {
    const averageSessions = [
      {
        day: "L",
        sessionLength: 0,
      },
      {
        day: "M",
        sessionLength: 0,
      },
      {
        day: "M",
        sessionLength: 0,
      },
      {
        day: "J",
        sessionLength: 0,
      },
      {
        day: "V",
        sessionLength: 0,
      },
      {
        day: "S",
        sessionLength: 0,
      },
      {
        day: "D",
        sessionLength: 0,
      },
    ];

    return averageSessions;
  }

  /**
   * @returns {array.Object}
   */
  get defaultDailyActivity() {
    const dailyActivity = [];

    let date = new Date(Date.now());

    // eslint-disable-next-line no-unused-vars
    for (let _ of "1234567") {
      let dateFr = new Intl.DateTimeFormat("fr").format(date);

      dailyActivity.push({
        day: dateFr.slice(0, 5),
        kilogram: 0,
        calories: 0,
      });

      date.setDate(date.getDate() - 1);
    }

    dailyActivity.reverse();

    return dailyActivity;
  }

  /**
   * @returns {Object}
   */
  get defaultKeyData() {
    return {
      calorieCount: null,
      proteinCount: null,
      carbohydrateCount: null,
      lipidCount: null,
    };
  }

  /**
   * @param {number} userId
   * @returns {array.Object}
   */
  getActivitiesById(userId) {
    const activities = [];

    for (let user of USER_PERFORMANCE) {
      if (user.userId === userId) {
        for (let item of user.data) {
          activities.push({
            activity: ACTIVITY_BY_KIND[item.kind],
            value: item.value,
          });
        }

        return activities;
      }
    }

    return this.defaultActivities;
  }

  /**
   * @param {number} userId
   * @returns {array.Object}
   */
  AverageSessionsById(userId) {
    console.log(userId)
    for (let user of USER_AVERAGE_SESSIONS) {
      if (user.userId === Number(userId)) {
        return { data: user };
      }
    }
  }

  /**
   * @param {number}} userId
   * @returns {array.Object}
   */
  getDailyActivityById(userId) {
    for (let user of USER_ACTIVITY) {
      if (user.userId === Number(userId)) {
        return { data:user.sessions }
      }
    }
  }

  getPerformanceById(userId) {
    for (let user of USER_PERFORMANCE) {
      if (user.userId === Number(userId)) {
        return { data: user }
      }
    }
  }


    /**
     * @param {number} userId
     * @returns {string}
     */
    static getFirstNameById(userId) {
  for (let user of USER_MAIN_DATA) {
    if (user.id === userId) {
      return user
    }
  }

  return "Unknown User";
}

getUserName(userId) {
  for (let user of USER_MAIN_DATA) {

    if (user.id === Number(userId)) {
      return { data: user }
    }
  }

  return "Unknown User";
}

/**
 * @param {number} userId
 * @returns {Object}
 */
getKeyDataById(userId) {
  for (let user of USER_MAIN_DATA) {
    if (user.id === userId) {
      return user.keyData;
    }
  }

  return this.defaultKeyData;
}

/**
 * @param {number} userId
 * @returns {number}
 */
getTodayScoreById(userId) {
  for (let user of USER_MAIN_DATA) {
    if (user.id === userId) {
      return user.todayScore;
    }
  }

  return 0;
}
  }