import * as React from 'react';
import Svg, {Circle, Defs, G, Mask, Path, Use} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={300} height={300} viewBox="0 0 450 450" {...props}>
      <Defs>
        <Circle id="prefix__a" cx={225} cy={225} r={225} />
        <Circle id="prefix__c" cx={225} cy={225} r={225} />
        <Circle id="prefix__e" cx={225} cy={225} r={225} />
        <Circle id="prefix__g" cx={225} cy={225} r={225} />
        <Circle id="prefix__i" cx={225} cy={225} r={225} />
        <Path
          id="prefix__k"
          d="M0 0c120.398 0 218 97.602 218 218S120.398 436 0 436z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Circle cx={225} cy={225} r={225} fill="#497EFA" fillRule="nonzero" />
        <Mask id="prefix__b" fill="#fff">
          <Use xlinkHref="#prefix__a" />
        </Mask>
        <Path
          fill="#356CEE"
          fillRule="nonzero"
          d="M317.177 262c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm-287 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm539 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-166c-6.627 0-12-5.373-12-12s5.373-12 12-12h166zm-334-96c6.628 0 12 5.373 12 12s-5.372 12-12 12h-78v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h160c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.628 0 12-5.373 12-12s-5.372-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm168 36c0-6.627-5.372-12-12-12h-84c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.628 0 12 5.373 12 12s-5.372 12-12 12h-24v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h200c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h9c6.628 0 12-5.373 12-12zm-388-36c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm662 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156z"
          mask="url(#prefix__b)"
        />
        <Mask id="prefix__d" fill="#fff">
          <Use xlinkHref="#prefix__c" />
        </Mask>
        <Path
          fill="#356CEE"
          fillRule="nonzero"
          d="M317.177 118c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm-287 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm539 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-166c-6.627 0-12-5.373-12-12s5.373-12 12-12h166zm-334-96c6.628 0 12 5.373 12 12s-5.372 12-12 12h-78v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99V70h160c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.628 0 12-5.373 12-12s-5.372-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm168 36c0-6.627-5.372-12-12-12h-84c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.628 0 12 5.373 12 12s-5.372 12-12 12h-24v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99V70h200c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h9c6.628 0 12-5.373 12-12zm-388-36c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm662 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156z"
          mask="url(#prefix__d)"
          opacity={0.4}
        />
        <Mask id="prefix__f" fill="#fff">
          <Use xlinkHref="#prefix__e" />
        </Mask>
        <Path
          fill="#356CEE"
          fillRule="nonzero"
          d="M317.177 430c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm-287 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm539 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-166c-6.627 0-12-5.373-12-12s5.373-12 12-12h166zm-334-96c6.628 0 12 5.373 12 12s-5.372 12-12 12h-78v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h160c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.628 0 12-5.373 12-12s-5.372-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm168 36c0-6.627-5.372-12-12-12h-84c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.628 0 12 5.373 12 12s-5.372 12-12 12h-24v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h200c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h9c6.628 0 12-5.373 12-12zm-388-36c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm662 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156z"
          mask="url(#prefix__f)"
          opacity={0.4}
        />
        <Mask id="prefix__h" fill="#fff">
          <Use xlinkHref="#prefix__g" />
        </Mask>
        <Path
          fill="#2255CA"
          fillRule="nonzero"
          d="M148.177 274c0-6.627-5.372-12-12-12h-19c-6.627 0-12-5.373-12-12s5.373-12 12-12h79c6.628 0 12 5.373 12 12s-5.372 12-12 12h-3v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h3c6.628 0 12 5.373 12 12s-5.372 12-12 12h-61c-6.627 0-12-5.373-12-12s5.373-12 12-12h1c6.628 0 12-5.373 12-12z"
          mask="url(#prefix__h)"
        />
        <Mask id="prefix__j" fill="#fff">
          <Use xlinkHref="#prefix__i" />
        </Mask>
        <Path
          fill="#000"
          fillRule="nonzero"
          mask="url(#prefix__j)"
          opacity={0.078}
          d="M225 11h215.354v428H225z"
        />
        <G transform="translate(225 7)">
          <Mask id="prefix__l" fill="#fff">
            <Use xlinkHref="#prefix__k" />
          </Mask>
          <Use fill="#94D5FF" xlinkHref="#prefix__k" />
          <Circle cy={218} r={211} fill="#2959C9" mask="url(#prefix__l)" />
          <Circle cy={218} r={147} fill="#6593FF" mask="url(#prefix__l)" />
          <Circle cy={218} r={82} fill="#4A7AE9" mask="url(#prefix__l)" />
          <Circle cy={218} r={32} fill="#042570" mask="url(#prefix__l)" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
