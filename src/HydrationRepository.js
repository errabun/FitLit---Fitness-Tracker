class HydrationRepository {
  constructor(hydrationData) {
    this.userHydration = hydrationData;
  }

  returnUserData(id) {
    return this.userHydration.find(element => id === element.id);
  };
}

if (typeof module !== 'undefined') {
  module.exports = UserHydration;
}
