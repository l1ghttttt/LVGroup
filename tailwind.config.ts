import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@shadcn/ui/components/**/*.{js,ts,jsx,tsx}",
	"./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border-color))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		borderColor: {
			servicesLineBg: 'hsl(var(--services-line-bg))',
		},
  		fontSize: {
  			headerSize: 'var(--text-header)',
  			mainZag: 'var(--mainZag)',
  			welcomeLink: 'var(--welcome-link)',
  			welcomeDescr: 'var(--welcome-link-deskr)',
  			casesNameSize: 'var(--cases-name-size)',
  			caseTextSize: 'var(--case-text-size)',
  			seeAllSize: 'var(--see-all-size)',
  			servicesTitleSize: 'var(--services-title-size)',
  			servicesDescriptionSize: 'var(--services-description-size)',
  			serviceTitleSize: 'var(--service-title-size)',
  			serviceNameSize: 'var(--service-name-size)',
  			orderTitleSize: 'var(--order-title-size)',
  			orderDescrSize: 'var(--order-descr-size)',
  			orderContactsSize: 'var(--order-contacts-size)',
			customerTitleSize: 'var(--heading-size)',
			customerClientSize: 'var(--heading-size-client)',
			customerInfographySize: 'var(--customer-infography-size)',
			customerInfographySmallSize: 'var(--customer-infography-small-size)',
			WebsiteCreatingWelcomeHeadingSize: 'var(--website-creating-welcome-heading-size)',
			WebsiteCreatingWelcomeDescrSize: 'var(--website-creating-welcome-descr-size)',
			OrderedListDescrSize: 'var(--ordered-list-descr-size)',
			ContactsLinkTextSize: 'var(--contacts-link-text-size)',
			ContactsHatTitle: 'var(--contacts-hat-title-text)',
			ContactsCubeTextSize: 'var(--contacts-cube-title-size)',
		},
  		textColor: {
  			headerColor: 'hsl(var(--header-color))',
  			altColor: 'hsl(var(--text-inversion))',
  			welcomeColorDescr: 'hsl(var(--welcome-colorDescr))',
  			mainColor: 'hsl(var(--main-color))',
  			darkMain: 'hsl(var(--dark-main))',
  			footerLinkColor: 'hsl(var(--footer-link-color))',
			qaColor: 'hsl(var(--qa-answer-color))',
  		},
  		backgroundColor: {
  			mainColor: 'hsl(var(--main-color))',
  			darkMain: 'hsl(var(--dark-main))',
  			servicesLineBg: 'hsl(var(--services-line-bg))',
  			orderBg: 'hsl(var(--order-bg))',
  			altBg: 'hsl(var(--bg-inversion))',
			qaBg: 'hsl(var(--qa-background))',
  		},
  		fontFamily: {
  			railway: 'var(--title-font)'
  		},
  		padding: {
  			welcomePadding: 'var(--welcome-pl)',
  			welcomeWrapper: 'var(--welcome-wrapper)',
  			welcomeWrapperBottom: 'var(--welcome-wrapper-bottom)',
  			welcomeLinkPadding: 'var(--welcome-link-padding)',
  			welcomeLinkPaddingTop: 'var(--welcome-link-padding-top)',
  			casesNamePadding: 'var(--cases-name-padding)',
  			casesFilterPadding: 'var(--cases-filter-padding)',
  			caseContentPadding: 'var(--case-content-padding)',
  			servicesPadding: 'var(--space-m)',
  			servicePadding: 'var(--space-s)',
  			servicesTitlePadding: 'var(--app__space)',
  			footerNavListPadding: 'var(--footer-space)',
  			footerNavListPaddingMaxl: 'var(--footer-nav-list-padding-maxl)',
  			footerSocialPaddingXL: 'var(--footer-social-space)',
  			footerSocialPaddingMaxl: 'var(--footer-social-padding-maxl)',
  			formSpaceYPadding: 'var(--form__space_y)',
  			formSpaceXPadding: 'var(--form__space_x)',
			CustomerSpacingPadding: 'var(--detail__space)',
			WebsiteCreatingWelcomePaddingX: 'var(--website-creating-welcome-padding-x)',
			WebsiteCreatingWelcomePaddingBottom: 'var(--website-creating-padding-bottom)',
			WebsiteCreatingWelcomePaddingTop: 'var(--website-creating-padding-top)',
			WebsiteCreatingWelcomeDescrPadding: 'var(--website-creating-welcome-descr-padding)',
			ContactsHatPadding: 'var(--contacts-hat-padding)',
			ContactsLinkPaddingLeft: 'var(--contacts-link-padding-left)',
			ContactsCubeInnerPadding: 'var(--contacts-cube-inner-padding)',
  		},
  		margin: {
  			footerNavMarginXL: 'var(--footer-nav-margin-xl)',
  			footerNavMarginMaxl: 'var(--footer-nav-margin-maxl)',
  			footerSocialMarginXL: 'var(--footer-social-margin-xl)',
  			footerSocialMarginTopMaxXL: 'var(--footer-social-marginTop-maxl)',
  			footerSocialMarginMaxXL: 'var(--footer-social-margin-maxl)',
  			orderIconMargin: 'var(--order-icon-margin)',
  			orderContactsMargin: 'var(--order-contacts-mb)',
			CustomerTitleMargin: 'var(--app__space)',
			CustomerSpacingMargin: 'var(--detail__space)',
			stackMargin: 'var(--stack-margin)',
			WebsiteCreatingWelcomeDescrMargin: 'var(--website-creating-welcome-descr-margin)',
			WebsiteCreatingWelcomeDescrMarginTop: 'var(--website-creating-welcome-descr-margin-top)',
			OrderedListHeadingMargin: 'var(--ordered-list-heading-margin)',
			OrderedListDescrMargin: 'var(--ordered-list-descr-margin)',
			OrderedListItemMargin: 'var(--ordered-list-item-margin)',
			ContactsHatMargin: 'var(--contacts-hat-margin-right)',
			ContactsUroInfMarginTop: 'var(--contacts-uro-inf-margin-top)',
			ContactsUroInfMarginBottom: 'var(--contacts-uro-inf-margin-bottom)',
			ContactsLinksMarginTop: 'var(--contacts-link-margin-top)',
  		},
		right: {
			CustomerLogoRight: 'var(--right-CustomerLogo)'
		},
  		width: {
  			caseWidth: 'var(--case-width)',
			customerTitleWidth: 'var(--customer-title-width)',
			customerImageWidth: 'var(--detail__bar)',
			stackWidth: 'var(--stack-width)',
			WebsiteCreatingWelcomeHeadingWidth: 'var(--website-creating-welcome-heading-width)',
			WebsiteCreatingWelcomeDescrWidth: 'var(--website-creating-welcome-descr-width)',
			OrderedListWidth: 'var(--ordered-list-width)',
			ContactsUroInfWidth: 'var(--contacts-uro-inf-width)',
			ContactsCubeWidth: 'var(--contacts-cube-width)',
  		},
  		height: {
  			caseHeight: 'var(--case-height)',
			ContactsCubeHeight: 'var(--contacts-cube-height)',

  		},
  		lineHeight: {
  			caseTextLeading: 'var(--case-text-leading)',
  			seeAllLeading: 'var(--see-all-leading)',
  			servicesTitleLeading: 'var(--services-title-leading)',
  			servicesDescriptionLeading: 'var(--services-description-leading)',
  			serviceTitleLeading: 'var(--service-title-leading)',
  			serviceNameLeading: 'var(--service-name-leading)',
  			orderTitleLeading: 'var(--order-title-leading)',
  			orderDescrLeading: 'var(--order-descr-leading)',
			customerTitleLeading: 'var(--heading-level)',
			customerClientLeading: 'var(--heading-level-client)',
			customerInfographyLeading: 'var(--customer-infography-size)',
			customerInfographySmallLeading: 'var(--customer-infography-small-size)',
			WebsiteCreatingWelcomeDescrLeading: 'var(--website-creating-welcome-descr-leading)',
			OrderedListDescrLeading: 'var(--ordered-list-descr-leading)',
			ContactsCubeTextLeading: 'var(--contacts-cube-title-leading)',
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [forms, typography, aspectRatio, require("tailwindcss-animate")],
} satisfies Config;