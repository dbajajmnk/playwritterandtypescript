public class Car {
    private String make;
    private String model;
    private int year;

    public Car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public String getMake() {
        return make;
    }


    public String getModel() {
        return model;
    }
    public int getYear() {
        return year;
    }

    public void start(){
        System.out.println("Car is starting...");
    }
     public void start(int speed){
        System.out.println("Car is starting at speed: " + speed);
    }

     public void start(int speed, String mode){
        System.out.println("Car is starting at speed: " + speed + " in mode: " + mode);
    }
    public void stop(){
        System.out.println("Car is stopping...");
    }
    public void accelerate(){
        System.out.println("Car is accelerating...");
    }

    

   
}