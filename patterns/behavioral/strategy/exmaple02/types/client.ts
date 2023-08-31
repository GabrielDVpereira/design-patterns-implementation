export type CustomerType = 'new_customer' | 'premium_customer' | 'standard_customer'

export interface Customer {
    name: string; 
    type: CustomerType
}