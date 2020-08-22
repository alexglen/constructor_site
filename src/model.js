import piter1 from "./assets/piter1.jpg";
import {
	BlockText,
	BlockTitle,
	BlockTextColumns,
	BlockImg,
	BlockMenu,
} from "./classes/Block";

export const model = [
	new BlockMenu(["News", "Articles", "Contacts"], {
		styles: "margin-left:5rem",
	}),
	new BlockTitle("Welcome to St. Petersburg", {
		styles: "color:white;background:#7952b1;text-align:center;padding:.5rem",
		tag: "h2",
	}),
	new BlockText(
		"Saint Petersburg (Russian: Санкт-Петербург, tr. Sankt-Peterburg, IPA: [ˈsankt pʲɪtʲɪrˈburk] (About this soundlisten)), formerly known as Petrograd (Петроград) (1914–1924), then Leningrad (Ленинград) (1924–1991), is a city situated on the Neva River, at the head of the Gulf of Finland on the Baltic Sea. It is Russia's second-largest city after Moscow. With a population of roughly 5.4 million inhabitants,[9] it is the fourth-most populous city in Europe, the most populous city on the Baltic Sea, as well as the northernmost metropolis in Europe and the world.[10] As an important Russian port on the Baltic Sea, it is governed as a federal city.",
		{ styles: `color:white;background:black;padding:.5rem` }
	),
	new BlockTextColumns(
		[
			"The city was founded by Tsar Peter the Great on 27 May, 1703 on the site of a captured Swedish fortress, and was named after apostle Saint Peter. Saint Petersburg is historically and culturally associated with the birth of the Russian Empire and Russia's entry into modern history as a European great power.[11] It served as a capital of the Tsardom of Russia and the subsequent Russian Empire from 1713 to 1918 (being replaced by Moscow for a short period of time between 1728 and 1730). After the October Revolution in 1917, the Bolsheviks moved their government to Moscow.[12]",
			"As one of the most important tourism centers in Russia, Saint Petersburg received over 15 million tourists in 2018,[13][14] and is considered an important economic, scientific and cultural centre of Russia. In modern times, it is considered the Northern Capital and serves as a home to some federal government bodies such as the Constitutional Court of Russia and the Heraldic Council of the President of the Russian Federation. ",
			"The city's traditional nicknames among Russians are the Window to the West and the Window to Europe. The northernmost metropolis in the world, St. Petersburg is often called the Venice of the North or Russian Venice due to its many water corridors, as the city is built on swamp and water. Furthermore, St. Petersburg has strongly Western European-inspired architecture and culture, which is combined with the city's Russian heritage.[21][22][23] Another nickname of St. Petersburg is The City of White Nights because of a natural phenomenon which arises due to the closeness to the polar region and ensures that in summer the nights of the city do not get completely dark for a month.[24][25]",
			"During its first few years, the city developed around Trinity Square on the right bank of the Neva, near the Peter and Paul Fortress. However, Saint Petersburg soon started to be built out according to a plan. By 1716 the Swiss Italian Domenico Trezzini had elaborated a project whereby the city centre would be on Vasilyevsky Island and shaped by a rectangular grid of canals. The project was not completed but is evident in the layout of the streets. In 1716, Peter the Great appointed Frenchman Jean-Baptiste Alexandre Le Blond as the chief architect of Saint Petersburg.[32]",
		],
		{ styles: `padding:1rem;` }
	),
	new BlockImg(piter1, {
		styles: "width:60%;padding-left:2rem;",
		alt: "Красивая картинка",
	}),
];
