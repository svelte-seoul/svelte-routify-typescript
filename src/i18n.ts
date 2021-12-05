import {addMessages, getLocaleFromNavigator, init} from "svelte-i18n";

import en from "../assets/en.json";
import ko from "../assets/ko.json";

addMessages("en", en);
addMessages("ko", ko);

void init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator(),
});
