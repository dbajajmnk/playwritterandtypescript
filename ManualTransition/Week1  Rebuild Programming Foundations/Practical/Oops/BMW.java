













import java.util.List;

public class BMW extends Car implements  Interfaceexample {


    private List<String> features;
    public BMW(String make, int year, String model, List<String> features) {
        super(make, model, year);
        this.features = features;
    }

    @Override
    public void start() {
        System.out.println("BMW is starting with a roar...");
    }

    @Override
    public void accelerate() {
        System.out.println("BMW is accelerating with power...");
    }

    @Override
    public void speedUp() {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    @Override
    public void speedDown() {
        throw new UnsupportedOperationException("Not supported yet.");
    }
    
}