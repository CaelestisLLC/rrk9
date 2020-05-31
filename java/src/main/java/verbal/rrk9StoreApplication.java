package verbal;

import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

public class rrk9StoreApplication extends Application<rrk9StoreConfiguration> {

    public static void main(final String[] args) throws Exception {
        new rrk9StoreApplication().run(args);
    }

    @Override
    public String getName() {
        return "rrk9Store";
    }

    @Override
    public void initialize(final Bootstrap<rrk9StoreConfiguration> bootstrap) {
        // TODO: application initialization
    }

    @Override
    public void run(final rrk9StoreConfiguration configuration,
                    final Environment environment) {
        // TODO: implement application
    }

}
