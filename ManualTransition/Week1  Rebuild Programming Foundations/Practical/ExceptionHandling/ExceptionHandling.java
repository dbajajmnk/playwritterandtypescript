//Exception
//Checked and UnChecked Exception
//Throw and Throws
//Try and Catch
//Finally
//Custom Exception


public class ExceptionHandling {
    public static void main(String[] args) {
        try {
            String number="";
            // try{
            //  number = makeInputFromUser();
            // }
            // catch (IllegalArgumentException e) {
            //     System.out.println("Invalid input: " + e.getMessage());
            //     return; // Exit the method if input is invalid
            // }

             try {
             number = makeInputFromUser();
            } catch (IllegalArgumentException e) {
                System.out.println("Invalid input: " + e.getMessage());
                number= makeInputFromUser(); // Prompt the user again for input
                
            }
           
            try {
                int myNumber = Integer.parseInt(number);
                System.out.println(myNumber);
            } catch (NumberFormatException e) {
                System.out.println("Invalid number format");
            }
            //Checked Exception
            Thread.sleep(1000);
        } catch (InterruptedException ex) {
            System.getLogger(ExceptionHandling.class.getName()).log(System.Logger.Level.ERROR, (String) null, ex);
        }
        finally {
            System.out.println("This block will always execute");
        }
    }

     public static String makeInputFromUser() throws IllegalArgumentException {
        System.out.println("Please enter a number: ");
        String number = System.console().readLine(); // Implementation for getting input from user
        if(number == null || number.isEmpty()) {
            throw new IllegalArgumentException("Input cannot be empty");
        }
        return number;
    }
       
        

    //Throw and Throws

    //Custom Exception

    static class CustomException extends Exception {
        int input=0;
        public CustomException(String message,int input) {
            super(message);
            if(input<0){
                throw new IllegalArgumentException("Input cannot be negative");
            }
            this.input = input;

        }

    }   
    


   
}