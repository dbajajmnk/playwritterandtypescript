public class LoopsPractical {
    public static void main(String[] args) {
        //For loop
        
        
        int number = 2;
        // for(int i = 1; i <= 10; i++) {
        //     System.out.println(number + " x " + i + " = " + (number * i));
        // }
        // int sum=0;
        // for(int i = 1; i <= 5; i++) {
        //     sum += i;
        // }
        //System.out.println("Sum: " + sum);
        // for(int i = 5; i >= 1; i--) {
        //     System.out.println("For Loop: " + i);
        // }

        //While Loop
       
        // while(count <= 5) {
        //     System.out.println("While Loop: " + count);
        //     count++;
        // }
        // System.out.println("Count after while loop: " + count); 

        //  int sum = 0;
        // while(count <= 5) {
        //     System.out.println("While Loop: " + count);
        //     sum+= count;
        //     count++;
        // }
        // System.out.println("Sum: " + sum);

    //     while (count<=10) {
    //          System.out.println(number + " x " + count + " = " + (number * count));
       
    //    count++;}
        // System.out.println("Count after while loop: " + count);
        //Do While Loop
        // do {
        //     System.out.println("Do-While Loop: " + count);
        //     count++;
        // } while(count <= 5);

        // int count = 1;
        // System.out.println("Post"+count++);  
        // System.out.println("After Post"+count);
        // System.out.println("Pre"+ ++count); 
        
        // System.out.println("Decrement Operations:");
        // System.out.println("Post Decrement"+count--);  
        // System.out.println("After Post Decrement"+count);
        // System.out.println("Post Decrement"+ count--); 
        //  System.out.println("After Post Decrement"+count);
        //  System.out.println("Pre Decrement"+ --count); 
        //  System.out.println("After Pre Decrement"+count);


        String[] fruits = {"Apple", "Banana", "Cherry", "Date", "Elderberry"};  
        for(String fruit : fruits) {
            System.out.println("Fruit: " + fruit);
        }

    }

}