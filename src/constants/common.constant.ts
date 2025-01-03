export const REGEX = {
	CONTAIN_NUMBER: /^\d/,
	CONTAIN_SPECIAL_CHAR: /[.,\\/#!$%^&*;:{}=\-_`~()\\]/g,
	CONTAIN_HTML_TAG: /(<([^>]+)>)/gi,
	EMPTY_NUMBER: /^[^\d]*$/,
	NO_SPECIAL_CHAR: /^[A-Za-z\uAC00-\uD7A3\s]*$/,
	NAME_MIN_LENGTH: /^.{2,}$/,
	ONLY_CHAR: /^[A-Za-z\uAC00-\uD7A3\s]{2,}$/,
	EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
	PASSWORD:
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{4,18}$/,
	PASSWORD2: /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[\S]{4,18}$/,
	PHONE_NUMBER: /^\d{10,15}$/,
	SITE: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/i,
	BANK_ACCOUNT: /^\d{8,20}$/,
	HTTP_URL_REGEX:
		/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$/,
	TRACKING_NUMBER: /^[A-Za-z0-9]{0,40}$/,
}
