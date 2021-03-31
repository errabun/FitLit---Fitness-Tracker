class HydrationRepository {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  returnUserHydration(id) {
    return this.hydrationData.filter(element => id === element.id);
  };
}

if (typeof module !== 'undefined') {
  module.exports = UserHydration;
}
