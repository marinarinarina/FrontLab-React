/*
for class
*/
interface PricingStrategy {
    public float getTotalPrice(CustomerOrder);
}

class WalkInPricing implements PricingStrategy {
  public float getTotalPrice(CustomerOrder order) {
      // Calculate the price per item in order
      // according to the walk-in pricing
      // ...
      return totalPrice;
  }
}

class OnlinePricing implements PricingStrategy {
  public float getTotalPrice(CustomerOrder order) {
      // Calculate the price per item in order
      // according to the online pricing
      // ...
      return totalPrice;  
  }
}
