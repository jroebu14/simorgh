import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { func, string } from 'prop-types';
import { ConsentBanner } from '@bbc/psammead-consent-banner';
import { ServiceContext } from '#contexts/ServiceContext';
import BannerText from './Text';
import getDataAttribute from './getDataAttribute';

// Styles to pin the consent banner to the bottom of the view port
// The z-index ensures the banner is always at the front, the value of 20
// was chosen to be higher than other absolute positioned elements such as
// the SkipLink component: https://github.com/bbc/psammead/blob/latest/packages/components/psammead-social-embed/src/SkipLinkWrapper/index.jsx#L34
const ConsentBannerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 20;
`;

const Accept = (message, onClick, dataAttribute) => {
  return (
    <button onClick={onClick} type="button" {...dataAttribute}>
      {message}
    </button>
  );
};

const Reject = (message, href, onClick, dataAttribute) => {
  return (
    <a href={href} onClick={onClick} {...dataAttribute}>
      {message}
    </a>
  );
};

const CanonicalConsentBannerContainer = ({ type, onReject, onAccept }) => {
  const { dir, translations, script, service } = useContext(ServiceContext);
  const consentBannerConfig = translations.consentBanner[type];

  const dataAttribute = getDataAttribute(type);

  return (
    <ConsentBannerWrapper>
      <ConsentBanner
        dir={dir}
        title={consentBannerConfig.title}
        text={BannerText(consentBannerConfig.description)}
        accept={Accept(
          consentBannerConfig.accept,
          onAccept,
          dataAttribute('accept'),
        )}
        reject={Reject(
          consentBannerConfig.reject,
          consentBannerConfig.rejectUrl,
          onReject,
          dataAttribute('reject'),
        )}
        script={script}
        service={service}
      />
    </ConsentBannerWrapper>
  );
};

CanonicalConsentBannerContainer.propTypes = {
  type: string.isRequired,
  onReject: func.isRequired,
  onAccept: func.isRequired,
};

export default CanonicalConsentBannerContainer;
