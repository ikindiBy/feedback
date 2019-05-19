import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import NearbyOrganizationsList from "../NearbyOrganizationsList";
import ExtendedSearch from "../ExtendedSearch";
import "./OrganizationTabs.css";

const OraganizationTabs = () => (
  <Tabs>
    <TabList className="TabList">
      <Tab>Ближайшие организации</Tab>
      <Tab>Расширенный поиск</Tab>
    </TabList>

    <TabPanel className="TabPanel">
      <NearbyOrganizationsList />
    </TabPanel>
    <TabPanel>
      <ExtendedSearch />
    </TabPanel>
  </Tabs>
);

export default OraganizationTabs;
