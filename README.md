class Transaction {
    
    // Method to process transaction using Credit Card
    void transferMoney(String creditCardNumber, double amount) {
        System.out.println("Transaction of ₹" + amount + " processed using Credit Card: " + creditCardNumber);
    }

    // Method to process transaction using Debit Card
    void transferMoney(String debitCardNumber, String pin, double amount) {
        System.out.println("Transaction of ₹" + amount + " processed using Debit Card: " + debitCardNumber);
    }

    // Method to process transaction using Net Banking
    void transferMoney(String bankName, String userId, double amount) {
        System.out.println("Transaction of ₹" + amount + " processed using Net Banking (" + bankName + ") for User ID: " + userId);
    }
}

public class MethodOverloadingExample {
    public static void main(String[] args) {
        Transaction t = new Transaction();

        // Credit Card Transaction
        t.transferMoney("1234-5678-9876-5432", 5000);

        // Debit Card Transaction
        t.transferMoney("5678-4321-8765-1234", "1234", 3000);

        // Net Banking Transaction
        t.transferMoney("HDFC Bank", "user_001", 10000);
    }
}
