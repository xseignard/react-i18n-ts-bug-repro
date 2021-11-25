import { useTranslation } from "react-i18next";
import "./styles.css";

export default function App() {
  const { t } = useTranslation(["ns1"]);
  return (
    <div className="App">
      <h1>{t("ns1:name")}</h1>
    </div>
  );
}
