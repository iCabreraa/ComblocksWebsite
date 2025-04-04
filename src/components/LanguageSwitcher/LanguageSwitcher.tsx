// components/LanguageSwitcher/LanguageSwitcher.tsx
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import styled from "styled-components";

const LanguageSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;

  select {
    background: transparent;
    border: 1px solid #666;
    padding: 0.3rem 0.6rem;
    color: white;
    border-radius: 6px;
    cursor: pointer;

    &:focus {
      outline: none;
      border-color: #999;
    }
  }
`;

const LanguageSwitcher = () => {
  const router = useRouter();
  const { i18n, t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    router.push(router.pathname, router.asPath, { locale: selectedLang });
  };

  return (
    <LanguageSwitcherContainer>
      <label htmlFor="language-select">{t("footer.language.label")}:</label>
      <select
        id="language-select"
        onChange={handleChange}
        value={i18n.language}
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="nl">NL</option>
      </select>
    </LanguageSwitcherContainer>
  );
};

export default LanguageSwitcher;
