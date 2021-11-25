import { Trans, useTranslation } from "react-i18next";
import "./styles.css";

export default function App() {
  const { t } = useTranslation(["ns1"]);
  return (
    <div className="App">
      <Trans i18nKey="ns1:name" t={t}>
        <h1>Weird</h1>
      </Trans>
    </div>
  );
}
