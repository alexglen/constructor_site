import { model } from "./model";
import { Site, Sidebar } from "./classes/Site";
import "./styles/main.css";

const site = new Site("#site");
site.render(model);

const updateCallback = (block) => {
	model.push(block);
	site.render(model);
	console.log("updateCallback -> model", model);
};

const sidebar = new Sidebar("#panel", updateCallback);
sidebar.init();
