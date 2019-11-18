public with sharing class CarTypes {
    public CarTypes() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Car_Type__c> getCarTypeslist(){
        System.debug('returning car types');
        return [select Name from car_type__c];
    }
}
