class BankTransaction {
    
    // Method to transfer money using a Credit Card
    void transferMoney(String creditCardNumber, double amount) {
        System.out.println("₹" + amount + " transferred using Credit Card: " + creditCardNumber);
    }

    // Method to transfer money using a Debit Card
    void transferMoney(String debitCardNumber, String pin, double amount) {
        System.out.println("₹" + amount + " transferred using Debit Card: " + debitCardNumber);
    }

    // Method to transfer money using Net Banking
    void transferMoney(String bankName, String userId, double amount) {
        System.out.println("₹" + amount + " transferred using Net Banking from " + bankName + " (User ID: " + userId + ")");
    }
}

public class PaymentDemo {
    public static void main(String[] args) {
        BankTransaction transaction = new BankTransaction();

        // Using Credit Card
        transaction.transferMoney("1111-2222-3333-4444", 2500);

        // Using Debit Card
        transaction.transferMoney("5555-6666-7777-8888", "1234", 5000);

        // Using Net Banking
        transaction.transferMoney("State Bank of India", "user123", 10000);
    }
}
