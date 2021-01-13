if (IS_DEV_SERVER) {
    if (module.hot) {
        module.hot.accept();
        module.hot.addStatusHandler(function (status) {
            // eslint-disable-next-line no-console
            if (status === "prepare")
                console.clear();
        });
    }
}
