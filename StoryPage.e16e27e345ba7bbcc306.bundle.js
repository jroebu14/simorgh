(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1414:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(__filename){__webpack_require__(18);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),ramda__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(635),_bbc_psammead_embed_error__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1420),_lib_logger_node__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(66),_lib_logger_node__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_lib_logger_node__WEBPACK_IMPORTED_MODULE_4__),_lib_logger_const__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(67),_contexts_RequestContext__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(11),_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7),_hooks_useToggle__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(43),_app_components_Grid__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(15),_canonical__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(1415),_canonical_Idt2__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(1416),_amp_Idt2Amp__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(1417),_amp_VjAmp__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1418),logger=_lib_logger_node__WEBPACK_IMPORTED_MODULE_4___default()(__filename),componentsToRender={amp:{idt2:function idt2(props){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_amp_Idt2Amp__WEBPACK_IMPORTED_MODULE_12__.a,props)},vj:function vj(props){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_amp_VjAmp__WEBPACK_IMPORTED_MODULE_13__.a,props)}},canonical:{idt1:function idt1(props){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_canonical__WEBPACK_IMPORTED_MODULE_10__.a,props)},idt2:function idt2(props){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_canonical_Idt2__WEBPACK_IMPORTED_MODULE_11__.a,props)},vj:function vj(props){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_canonical__WEBPACK_IMPORTED_MODULE_10__.a,props)}}},IncludeContainer=function IncludeContainer(props){var _useContext=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_RequestContext__WEBPACK_IMPORTED_MODULE_6__.a),isAmp=_useContext.isAmp,canonicalLink=_useContext.canonicalLink,translations=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_7__.a).translations,enabled=Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_8__.a)("include").enabled,errorMessage=Object(ramda__WEBPACK_IMPORTED_MODULE_2__.a)("Sorry, we can’t display this part of the story on this lightweight mobile page.",["include","errorMessage"],translations),linkText=Object(ramda__WEBPACK_IMPORTED_MODULE_2__.a)("View the full version of the page to see all the content.",["include","linkText"],translations);if(!enabled)return null;var isAmpSupported=props.isAmpSupported,href=props.href,type=props.type,index=props.index;if(!isAmpSupported&&isAmp)return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_components_Grid__WEBPACK_IMPORTED_MODULE_9__.e,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bbc_psammead_embed_error__WEBPACK_IMPORTED_MODULE_3__.a,{message:errorMessage,link:{text:linkText,href:"".concat(canonicalLink,"#include-").concat(index+1)}}));logger.info(_lib_logger_const__WEBPACK_IMPORTED_MODULE_5__.INCLUDE_RENDERED,{includeUrl:href,type:type});var platform=isAmp?"amp":"canonical";return componentsToRender[platform][type]?componentsToRender[platform][type](props):null};IncludeContainer.__docgenInfo={description:"",methods:[],displayName:"IncludeContainer",props:{href:{type:{name:"string"},required:!0,description:""},type:{type:{name:"string"},required:!0,description:""}}},__webpack_exports__.a=IncludeContainer,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/containers/Include/index.jsx"]={name:"IncludeContainer",docgenInfo:IncludeContainer.__docgenInfo,path:"src/app/containers/Include/index.jsx"})}).call(this,"/index.js")},1415:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(50);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_helmet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_app_components_Grid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(15),Include=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({displayName:"Include",componentId:"sc-1cjnknl-0"})(["max-width:100%;overflow:scroll hidden;margin-bottom:",";"],_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_4__.i),CanonicalIncludeContainer=function CanonicalIncludeContainer(_ref){var html=_ref.html,type=_ref.type,index=_ref.index;if(!html||!["idt1","vj"].includes(type))return null;var configureAdditionalScripts="require.config({ paths:".concat("{\n    'jquery-1':\n      'https://static.bbc.co.uk/frameworks/jquery/0.4.1/sharedmodules/jquery-1.7.2',\n    'istats-1':\n      'https://news.files.bbci.co.uk/include/vjassets/js/vendor/istats-1.0.0.min',\n  }"," });");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_components_Grid__WEBPACK_IMPORTED_MODULE_5__.e,null,["vj","idt1"].includes(type)&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script",{type:"text/javascript",src:"https://news.files.bbci.co.uk/include/vjassets/js/vendor/require-2.1.20b.min.js"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script",null,configureAdditionalScripts)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Include,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:html},id:"include-".concat(index+1),tabIndex:"-1"}))};CanonicalIncludeContainer.defaultProps={html:null},CanonicalIncludeContainer.__docgenInfo={description:"",methods:[],displayName:"CanonicalIncludeContainer",props:{html:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},type:{type:{name:"string"},required:!0,description:""},index:{type:{name:"number"},required:!0,description:""}}},__webpack_exports__.a=CanonicalIncludeContainer,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/containers/Include/canonical/index.jsx"]={name:"CanonicalIncludeContainer",docgenInfo:CanonicalIncludeContainer.__docgenInfo,path:"src/app/containers/Include/canonical/index.jsx"})},1416:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_bbc_psammead_image__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(203),_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_app_components_Grid__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(15),Include=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.withConfig({displayName:"Include",componentId:"sc-1ugtlik-0"})(["max-width:100%;overflow:scroll hidden;margin-bottom:",";"],_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.i),DISALLOWED_SCRIPTS=/js\/verticalChart|horizontalChart|lineChart|pieChart|simpleMap|table\./,Idt2Canonical=function Idt2Canonical(_ref){var html=_ref.html,imageBlock=_ref.imageBlock,index=_ref.index;if(!html||!imageBlock)return null;var src=imageBlock.src,alt=imageBlock.alt,srcset=imageBlock.srcset,isDisallowed=DISALLOWED_SCRIPTS.test(html);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Grid__WEBPACK_IMPORTED_MODULE_4__.e,null,isDisallowed?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bbc_psammead_image__WEBPACK_IMPORTED_MODULE_2__.a,{src:src,alt:alt,srcset:srcset,id:"include-".concat(index+1)}):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Include,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:html},id:"include-".concat(index+1)}))};Idt2Canonical.defaultProps={html:null,imageBlock:null},Idt2Canonical.__docgenInfo={description:"",methods:[],displayName:"Idt2Canonical",props:{html:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},imageBlock:{defaultValue:{value:"null",computed:!1},type:{name:"shape",value:{src:{name:"string",required:!0},alt:{name:"string",required:!0},srcset:{name:"string",required:!1}}},required:!1,description:""},index:{type:{name:"number"},required:!0,description:""}}},__webpack_exports__.a=Idt2Canonical,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/containers/Include/canonical/Idt2/index.jsx"]={name:"Idt2Canonical",docgenInfo:Idt2Canonical.__docgenInfo,path:"src/app/containers/Include/canonical/Idt2/index.jsx"})},1417:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_bbc_psammead_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(610),_app_components_Grid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15),Idt2Amp=function Idt2Amp(_ref){var imageBlock=_ref.imageBlock;return imageBlock?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Grid__WEBPACK_IMPORTED_MODULE_2__.e,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bbc_psammead_image__WEBPACK_IMPORTED_MODULE_1__.a,imageBlock)):null};Idt2Amp.__docgenInfo={description:"",methods:[],displayName:"Idt2Amp",props:{imageBlock:{type:{name:"shape",value:{src:{name:"string",required:!1},srcset:{name:"string",required:!1},height:{name:"number",required:!1},width:{name:"number",required:!1},alt:{name:"string",required:!1},layout:{name:"string",required:!1}}},required:!0,description:""}}},__webpack_exports__.a=Idt2Amp,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/containers/Include/amp/Idt2Amp.jsx"]={name:"Idt2Amp",docgenInfo:Idt2Amp.__docgenInfo,path:"src/app/containers/Include/amp/Idt2Amp.jsx"})},1418:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_bbc_gel_foundations_dist_spacings__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1419),_bbc_psammead_styles_colours__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_bbc_psammead_styles_font_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(16),_bbc_gel_foundations_typography__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(14),react_helmet__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(41),_app_components_Grid__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(15),_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(7),AmpHead=function AmpHead(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script",{async:!0,"custom-element":"amp-iframe",src:"https://cdn.ampproject.org/v0/amp-iframe-0.1.js"}))},AmpIframe=function AmpIframe(_ref){var children=_ref.children,className=_ref.className,width=_ref.width,height=_ref.height,src=_ref.src;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("amp-iframe",{class:className,width:width,height:height,layout:"responsive",sandbox:"allow-scripts allow-same-origin allow-top-navigation-by-user-activation allow-forms",resizable:"",src:src},children)},StyledAmpIframe=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(AmpIframe).withConfig({displayName:"StyledAmpIframe",componentId:"sc-10v41ix-0"})(["> [overflow]{background:linear-gradient( 0deg,#fff 0%,rgba(255,255,255,1) 75%,rgba(255,255,255,0) 100% );display:flex;justify-content:center;&::after{background-color:#fff;border-top:"," solid ",";content:'';display:block;height:50%;left:0;position:absolute;top:50%;width:100%;z-index:-10;}button{"," "," background-color:",";border:0.0625rem solid transparent;color:#fff;cursor:pointer;display:block;padding:"," ",";&:hover,&:focus{text-decoration:underline;}}}"],"0.125rem",_bbc_psammead_styles_colours__WEBPACK_IMPORTED_MODULE_3__.g,(function(_ref2){var service=_ref2.service;return Object(_bbc_psammead_styles_font_styles__WEBPACK_IMPORTED_MODULE_4__.a)(service)}),_bbc_gel_foundations_typography__WEBPACK_IMPORTED_MODULE_5__.f,_bbc_psammead_styles_colours__WEBPACK_IMPORTED_MODULE_3__.g,_bbc_gel_foundations_dist_spacings__WEBPACK_IMPORTED_MODULE_2__.GEL_SPACING,_bbc_gel_foundations_dist_spacings__WEBPACK_IMPORTED_MODULE_2__.GEL_SPACING_DBL),VjAmp=function VjAmp(_ref3){var _ref3$ampMetadata=_ref3.ampMetadata,imageWidth=_ref3$ampMetadata.imageWidth,imageHeight=_ref3$ampMetadata.imageHeight,image=_ref3$ampMetadata.image,src=_ref3$ampMetadata.src,service=Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_8__.a).service;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AmpHead,null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Grid__WEBPACK_IMPORTED_MODULE_7__.e,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAmpIframe,{width:imageWidth,height:imageHeight,src:src,service:service},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{overflow:""},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{type:"button"},"Show more")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("amp-img",{layout:"fill",src:image,placeholder:!0}))))};VjAmp.__docgenInfo={description:"",methods:[],displayName:"VjAmp",props:{ampMetadata:{type:{name:"shape",value:{imageWidth:{name:"string",required:!0},imageHeight:{name:"string",required:!0},image:{name:"string",required:!0},src:{name:"string",required:!0}}},required:!0,description:""}}},__webpack_exports__.a=VjAmp,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/containers/Include/amp/VjAmp.jsx"]={name:"VjAmp",docgenInfo:VjAmp.__docgenInfo,path:"src/app/containers/Include/amp/VjAmp.jsx"})},1419:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GEL_GUTTER_ABOVE_600PX=exports.GEL_MARGIN_ABOVE_400PX=exports.GEL_GUTTER_BELOW_600PX=exports.GEL_MARGIN_BELOW_400PX=exports.GEL_SPACING_SEPT=exports.GEL_SPACING_SEXT=exports.GEL_SPACING_QUIN=exports.GEL_SPACING_QUAD=exports.GEL_SPACING_TRPL=exports.GEL_SPACING_DBL=exports.GEL_SPACING=exports.GEL_SPACING_HLF=void 0;exports.GEL_SPACING_HLF="0.25rem";exports.GEL_SPACING="0.5rem";exports.GEL_SPACING_DBL="1rem";exports.GEL_SPACING_TRPL="1.5rem";exports.GEL_SPACING_QUAD="2rem";exports.GEL_SPACING_QUIN="2.5rem";exports.GEL_SPACING_SEXT="3rem";exports.GEL_SPACING_SEPT="3.5rem";var GEL_MARGIN_BELOW_400PX="".concat("0.5rem");exports.GEL_MARGIN_BELOW_400PX=GEL_MARGIN_BELOW_400PX;var GEL_GUTTER_BELOW_600PX="".concat("0.5rem");exports.GEL_GUTTER_BELOW_600PX=GEL_GUTTER_BELOW_600PX;var GEL_MARGIN_ABOVE_400PX="".concat("1rem");exports.GEL_MARGIN_ABOVE_400PX=GEL_MARGIN_ABOVE_400PX;var GEL_GUTTER_ABOVE_600PX="".concat("1rem");exports.GEL_GUTTER_ABOVE_600PX=GEL_GUTTER_ABOVE_600PX},1420:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),_bbc_psammead_styles_colours__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_bbc_psammead_styles_font_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),_bbc_gel_foundations_typography__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(14),_bbc_psammead_assets_svgs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1404),FILL_VIEWPORT_STYLES="\n  background-position: center;\n  background-size: ".concat("38.2%",";\n  height: 100vh;\n"),StyledEmbedError=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({displayName:"StyledEmbedError",componentId:"sc-1oc1egd-0"})([""," ",";background-color:",";background-image:url(data:image/svg+xml;base64,",");background-position:center ",";background-repeat:no-repeat;background-size:",";color:",";display:flex;flex-direction:column;justify-content:flex-end;padding-top:",";padding-bottom:",";border:0.0625rem solid transparent;",""],(function(_ref){var service=_ref.service;return Object(_bbc_psammead_styles_font_styles__WEBPACK_IMPORTED_MODULE_5__.b)(service)}),_bbc_gel_foundations_typography__WEBPACK_IMPORTED_MODULE_6__.a,_bbc_psammead_styles_colours__WEBPACK_IMPORTED_MODULE_3__.j,_bbc_psammead_assets_svgs__WEBPACK_IMPORTED_MODULE_7__.a,_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_4__.l,"10rem",_bbc_psammead_styles_colours__WEBPACK_IMPORTED_MODULE_3__.q,"6rem",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_4__.l,(function(_ref2){return _ref2.fillViewport&&FILL_VIEWPORT_STYLES})),StyledErrorMessage=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({displayName:"StyledErrorMessage",componentId:"sc-1oc1egd-1"})(["margin:0 ",";strong{font-weight:normal;}a{"," color:",";display:block;margin-top:",";text-decoration:none;&:visited{color:",";}&:hover,&:focus{text-decoration:underline;}}"],_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_4__.l,(function(_ref3){var service=_ref3.service;return Object(_bbc_psammead_styles_font_styles__WEBPACK_IMPORTED_MODULE_5__.a)(service)}),_bbc_psammead_styles_colours__WEBPACK_IMPORTED_MODULE_3__.g,_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_4__.e,_bbc_psammead_styles_colours__WEBPACK_IMPORTED_MODULE_3__.l),EmbedError=function EmbedError(_ref4){var service=_ref4.service,message=_ref4.message,fillViewport=_ref4.fillViewport,link=_ref4.link;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledEmbedError,{service:service,fillViewport:fillViewport},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledErrorMessage,{service:service},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,message)),link&&link.text&&link.href&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:link.href},link.text)))};EmbedError.defaultProps={service:"news",fillViewport:!1,link:null},EmbedError.propTypes={service:prop_types__WEBPACK_IMPORTED_MODULE_1__.string,fillViewport:prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,message:prop_types__WEBPACK_IMPORTED_MODULE_1__.string.isRequired,link:Object(prop_types__WEBPACK_IMPORTED_MODULE_1__.shape)({text:prop_types__WEBPACK_IMPORTED_MODULE_1__.string.isRequired,href:prop_types__WEBPACK_IMPORTED_MODULE_1__.string.isRequired})},__webpack_exports__.a=EmbedError},854:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(326);var helpers_extends=__webpack_require__(19),extends_default=__webpack_require__.n(helpers_extends),react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__(3),spacings=__webpack_require__(2),esm=__webpack_require__(181),breakpoints=__webpack_require__(5),path=__webpack_require__(10),path_default=__webpack_require__.n(path),pathOr=__webpack_require__(8),pathOr_default=__webpack_require__.n(pathOr),Grid=__webpack_require__(15),helpers=__webpack_require__(639),CpsMetadata=__webpack_require__(640),ChartbeatAnalytics=__webpack_require__(112),LinkedData=__webpack_require__(113),Headings=__webpack_require__(179),ArticleTimestamp=__webpack_require__(266),CpsText=__webpack_require__(641),Image=__webpack_require__(160),CpsAssetMediaPlayer=__webpack_require__(268),Blocks=__webpack_require__(51),CpsRelatedContent=__webpack_require__(392),CpsTopStories=__webpack_require__(757),CpsFeaturesAnalysis=__webpack_require__(755),MostRead=__webpack_require__(137),ATIAnalytics=__webpack_require__(111),ComscoreAnalytics=__webpack_require__(114),FauxHeadline=(__webpack_require__(441),__webpack_require__(393)),VisuallyHiddenHeadline=__webpack_require__(397),Byline=__webpack_require__(773),SocialEmbed=__webpack_require__(425),CpsRecommendations=__webpack_require__(772),parseAssetData=__webpack_require__(87),categoryMap=function categoryType(category){var dictonary={News:"ReportageNewsArticle",Feature:"ReportageNewsArticle",Infographic:"ReportageNewsArticle",Interactive:"ReportageNewsArticle","Newsbeat Investigates":"ReportageNewsArticle",Summary:"ReportageNewsArticle","You what?":"ReportageNewsArticle",Quiz:"ReportageNewsArticle",Explainer:"BackgroundNewsArticle",Analysis:"AnalysisNewsArticle",Opinion:"OpinionNewsArticle","Advertiser Content":"AdvertiserContentArticle",Review:"ReviewNewsArticle","Ask the Audience":"AskPublicNewsArticle"};return dictonary[category]?dictonary[category]:"NewsArticle"},Include=__webpack_require__(1414),ServiceContext=__webpack_require__(7),Ad=__webpack_require__(269),CanonicalAdBootstrapJs=__webpack_require__(400),RequestContext=__webpack_require__(11),useToggle=__webpack_require__(43),MpuContainer=Object(styled_components_browser_esm.default)(Ad.a).withConfig({displayName:"MpuContainer",componentId:"uounnc-0"})(["margin-bottom:",";"],spacings.l),StoryPage_StoryPage=function StoryPage(_ref){var pageData=_ref.pageData,mostReadEndpointOverride=_ref.mostReadEndpointOverride,_useContext=Object(react.useContext)(ServiceContext.a),dir=_useContext.dir,header=_useContext.mostRead.header,script=_useContext.script,service=_useContext.service,serviceLang=_useContext.serviceLang,lang=_useContext.lang,title=path_default()(["promo","headlines","headline"],pageData),shortHeadline=path_default()(["promo","headlines","shortHeadline"],pageData),category=path_default()(["promo","passport","category","categoryName"],pageData),summary=path_default()(["promo","summary"],pageData),metadata=path_default()(["metadata"],pageData),allowDateStamp=path_default()(["options","allowDateStamp"],metadata),assetUri=path_default()(["locators","assetUri"],metadata),blocks=pathOr_default()([],["content","model","blocks"],pageData),relatedContent=pathOr_default()([],["relatedContent","groups",0,"promos"],pageData),indexImagePath=path_default()(["promo","indexImage","path"],pageData),indexImageLocator=indexImagePath?Object(helpers.a)(indexImagePath)[1]:null,indexImageAltText=path_default()(["promo","indexImage","altText"],pageData),firstPublished=Object(parseAssetData.d)(pageData),lastPublished=Object(parseAssetData.g)(pageData),aboutTags=Object(parseAssetData.a)(pageData),mostReadInitialData=path_default()(["mostRead"],pageData),topStoriesInitialData=path_default()(["secondaryColumn","topStories"],pageData),featuresInitialData=path_default()(["secondaryColumn","features"],pageData),recommendationsInitialData=path_default()(["recommendations"],pageData),gridColumns={group0:8,group1:8,group2:8,group3:8,group4:12,group5:12},gridColsMain={group0:8,group1:8,group2:8,group3:8,group4:8,group5:8},gridColsSecondary={group0:8,group1:8,group2:8,group3:8,group4:4,group5:4},adsEnabled=Object(useToggle.a)("ads").enabled,_useContext2=Object(react.useContext)(RequestContext.a),isAmp=_useContext2.isAmp,showAdsBasedOnLocation=_useContext2.showAdsBasedOnLocation,adcampaign=path_default()(["metadata","adCampaignKeyword"],pageData),isAdsEnabled=[path_default()(["metadata","options","allowAdvertising"],pageData),adsEnabled,showAdsBasedOnLocation].every(Boolean),componentsToRender={fauxHeadline:FauxHeadline.a,visuallyHiddenHeadline:VisuallyHiddenHeadline.a,headline:Headings.a,subheadline:Headings.a,text:CpsText.a,image:Image.a,timestamp:function timestamp(props){return allowDateStamp?react_default.a.createElement(StyledTimestamp,extends_default()({},props,{popOut:!1,minutesTolerance:1})):null},video:function video(props){return react_default.a.createElement(CpsAssetMediaPlayer.a,extends_default()({},props,{assetUri:assetUri}))},version:function version(props){return react_default.a.createElement(CpsAssetMediaPlayer.a,extends_default()({},props,{assetUri:assetUri}))},byline:function byline(props){return react_default.a.createElement(StyledByline,props)},include:function include(props){return react_default.a.createElement(Include.a,props)},social_embed:function social_embed(props){return react_default.a.createElement(SocialEmbed.a,props)},mpu:function mpu(props){return isAdsEnabled?react_default.a.createElement(MpuContainer,extends_default()({},props,{slotType:"mpu"})):null},wsoj:function wsoj(props){return react_default.a.createElement(CpsRecommendations.a,extends_default()({},props,{parentColumns:gridColsMain,items:recommendationsInitialData}))}},StyledTimestamp=Object(styled_components_browser_esm.default)(ArticleTimestamp.a).withConfig({displayName:"StyledTimestamp",componentId:"uounnc-1"})(["padding-bottom:",";@media (min-width:","){padding-bottom:",";}"],spacings.f,breakpoints.i,spacings.l),StyledByline=Object(styled_components_browser_esm.default)(Byline.a).withConfig({displayName:"StyledByline",componentId:"uounnc-2"})(["padding-bottom:",";@media (min-width:","){padding-bottom:",";}"],spacings.f,breakpoints.i,spacings.l),StoryPageGrid=Object(styled_components_browser_esm.default)(Grid.j).withConfig({displayName:"StoryPageGrid",componentId:"uounnc-3"})(["width:100%;margin:0 auto;@media (min-width:","){max-width:",";}"],breakpoints.i,breakpoints.i),GridPrimaryColumn=Object(styled_components_browser_esm.default)(Grid.j).withConfig({displayName:"GridPrimaryColumn",componentId:"uounnc-4"})(["@media (max-width:","){width:100%;}padding-bottom:",";"],breakpoints.f,spacings.h),GridSecondaryColumn=Object(styled_components_browser_esm.default)(Grid.j).withConfig({displayName:"GridSecondaryColumn",componentId:"uounnc-5"})(["@media (min-width:","){margin-top:",";}"],breakpoints.i,spacings.h),ComponentWrapper=styled_components_browser_esm.default.div.withConfig({displayName:"ComponentWrapper",componentId:"uounnc-6"})(["margin-bottom:",";padding:",";"],spacings.l,spacings.f),ResponsiveComponentWrapper=styled_components_browser_esm.default.div.withConfig({displayName:"ResponsiveComponentWrapper",componentId:"uounnc-7"})(["margin-bottom:",";@media (min-width:","){padding:",";}"],spacings.l,breakpoints.i,spacings.f),MostReadSection=styled_components_browser_esm.default.section.attrs((function(){return{role:"region","aria-labelledby":"Most-Read","data-e2e":"most-read"}})).withConfig({displayName:"MostReadSection",componentId:"uounnc-8"})([""]);return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(CpsMetadata.a,{title:title,shortHeadline:shortHeadline,language:lang,description:summary,firstPublished:firstPublished,lastPublished:lastPublished,imageLocator:indexImageLocator,imageAltText:indexImageAltText,aboutTags:aboutTags,hasAppleItunesAppBanner:!0}),react_default.a.createElement(LinkedData.a,{type:categoryMap(category),seoTitle:title,headline:title,description:summary,showAuthor:!0,datePublished:firstPublished,dateModified:lastPublished,aboutTags:aboutTags,imageLocator:indexImageLocator}),react_default.a.createElement(ATIAnalytics.a,{data:pageData}),react_default.a.createElement(ChartbeatAnalytics.a,{data:pageData}),react_default.a.createElement(ComscoreAnalytics.a,null),isAdsEnabled&&!isAmp&&react_default.a.createElement(CanonicalAdBootstrapJs.a,{adcampaign:adcampaign}),isAdsEnabled&&react_default.a.createElement(Ad.a,{slotType:"leaderboard"}),react_default.a.createElement(StoryPageGrid,{columns:gridColumns,enableGelGutters:!0,margins:{group0:!1,group1:!1,group2:!1,group3:!1,group4:!0,group5:!0}},react_default.a.createElement(GridPrimaryColumn,{item:!0,columns:gridColsMain,startOffset:{group0:1,group1:1,group2:1,group3:1,group4:1,group5:1},parentColumns:gridColumns},react_default.a.createElement("main",{role:"main"},react_default.a.createElement(Blocks.a,{blocks:blocks,componentsToRender:componentsToRender})),react_default.a.createElement(CpsRelatedContent.a,{content:relatedContent,parentColumns:gridColsMain})),react_default.a.createElement(GridSecondaryColumn,{item:!0,columns:gridColsSecondary,parentColumns:gridColumns,lang:serviceLang},topStoriesInitialData&&react_default.a.createElement(ResponsiveComponentWrapper,null,react_default.a.createElement(CpsTopStories.a,{content:topStoriesInitialData,parentColumns:gridColsSecondary})),featuresInitialData&&react_default.a.createElement(ResponsiveComponentWrapper,null,react_default.a.createElement(CpsFeaturesAnalysis.a,{content:featuresInitialData,parentColumns:gridColsSecondary})),react_default.a.createElement(ComponentWrapper,null,react_default.a.createElement(MostRead.a,{mostReadEndpointOverride:mostReadEndpointOverride,columnLayout:"oneColumn",size:"small",wrapper:function MostReadWrapper(_ref2){var children=_ref2.children;return react_default.a.createElement(MostReadSection,null,react_default.a.createElement(esm.a,{script:script,labelId:"Most-Read",service:service,dir:dir},header),children)},initialData:mostReadInitialData})))))};StoryPage_StoryPage.__docgenInfo={description:"",methods:[],displayName:"StoryPage",composes:["../../models/propTypes/cpsAssetPage"]};var pages_StoryPage_StoryPage=StoryPage_StoryPage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/pages/StoryPage/StoryPage.jsx"]={name:"StoryPage",docgenInfo:StoryPage_StoryPage.__docgenInfo,path:"src/app/pages/StoryPage/StoryPage.jsx"});var applyBasicPageHandlers=__webpack_require__(170);__webpack_exports__.default=Object(applyBasicPageHandlers.a)({addVariantHandling:!1})(pages_StoryPage_StoryPage)}}]);
//# sourceMappingURL=StoryPage.e16e27e345ba7bbcc306.bundle.js.map