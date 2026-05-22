public class MainTest{

    public static void main(String[] args) {
        Car car1 = new Car("Toyota", "Camry", 2020);

        System.out.println("Car Make: " + car1.getMake());
        System.out.println("Car Model: " + car1.getModel());
        System.out.println("Car Year: " + car1.getYear());


          Car bmv = new  Car("BMW", "X5", 2021);

        System.out.println("Car Make: " + bmv.getMake());
        System.out.println("Car Model: " + bmv.getModel());
        System.out.println("Car Year: " + bmv.getYear());


        car1.start();
        car1.accelerate();
        bmv.start();
        bmv.accelerate();
    }
    
}