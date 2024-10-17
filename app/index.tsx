import React, { useState } from "react";
import { Redirect } from "expo-router";

const Home = () => {
    return (
        <Redirect href="/(auth)/welcome" />
       )
};

export default Home;
