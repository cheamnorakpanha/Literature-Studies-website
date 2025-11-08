import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../features/contact/ContactIndex";
import NoPage from "../features/not-found/NotFoundPage";
import About from "../features/about/AboutIndex";
import Home from "../features/home/HomeIndex";
import DesireesBaby from "../features/stories/DesireesBaby";
import DroversWife from "../features/stories/DroversWife";
import HappyPrince from "../features/stories/HappyPrince";
import HitchHiker from "../features/stories/HitchHiker";
import LettersFromThailand from "../features/stories/LettersFromThailand";
import Necklace from "../features/stories/Necklace";
import NotPoorJustBroke from "../features/stories/NotPoorJustBroke";
import OliverTwist from "../features/stories/OliverTwist";
import Poison from "../features/stories/Poison";
import RomeoAndJuliet from "../features/stories/RomeoAndJuliet";
import StoryOfAnHour from "../features/stories/StoryOfAnHour";
import VillageByTheSea from "../features/stories/VillageByTheSea";
import ScrollToTop from "../shared/hooks/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Story */}
          <Route path="DesireesBaby" element={<DesireesBaby />} />
          <Route path="DroversWife" element={<DroversWife />} />
          <Route path="HappyPrince" element={<HappyPrince />} />
          <Route path="HitchHiker" element={<HitchHiker />} />
          <Route path="LettersFromThailand" element={<LettersFromThailand />} />
          <Route path="Necklace" element={<Necklace />} />
          <Route path="NotPoorJustBroke" element={<NotPoorJustBroke />} />
          <Route path="OliverTwist" element={<OliverTwist />} />
          <Route path="Poison" element={<Poison />} />
          <Route path="RomeoAndJuliet" element={<RomeoAndJuliet />} />
          <Route path="StoryOfAnHour" element={<StoryOfAnHour />} />
          <Route path="VillageByTheSea" element={<VillageByTheSea />} />
          {/* Story */}

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
