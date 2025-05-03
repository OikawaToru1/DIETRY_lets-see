class DietTracker {
    constructor(required) {
      this.entries = {};
      this.id = 0;
  
      // Required daily intake
      this.required = {
        calories: required.calories || 0,
        carbs: required.carbs || 0,
        protein: required.protein || 0,
        fat: required.fat || 0,
        sugar: required.sugar || 0
      };
  
      // Totals so far
      this.total = {
        calories: 0,
        carbs: 0,
        protein: 0,
        fat: 0,
        sugar: 0
      };
    }
  
    addEntry({ name, calories, carbs, protein, fat, sugar }) {
      const id = this.id++;
      this.entries[id] = { id, name, calories, carbs, protein, fat, sugar };
  
      // Update totals
      this.total.calories += calories;
      this.total.carbs += carbs;
      this.total.protein += protein;
      this.total.fat += fat;
      this.total.sugar += sugar;
    }
  
    getEntries() {
      return Object.values(this.entries);
    }
  
    getEntry(id) {
      return this.entries[id];
    }
  
    deleteEntry(id) {
      const entry = this.entries[id];
      if (!entry) return;
  
      // Subtract from totals
      this.total.calories -= entry.calories;
      this.total.carbs -= entry.carbs;
      this.total.protein -= entry.protein;
      this.total.fat -= entry.fat;
      this.total.sugar -= entry.sugar;
  
      delete this.entries[id];
    }
  
    getRemaining() {
      return {
        calories: this.required.calories - this.total.calories,
        carbs: this.required.carbs - this.total.carbs,
        protein: this.required.protein - this.total.protein,
        fat: this.required.fat - this.total.fat,
        sugar: this.required.sugar - this.total.sugar
      };
    }
  
    getTotal() {
      return { ...this.total };
    }
  
    getRequired() {
      return { ...this.required };
    }
  }
  