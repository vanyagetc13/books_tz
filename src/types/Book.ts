interface volumeInfo {
	title: string;
	subtitle: string;
	readingModes: { image: boolean; text: boolean };
	ratingsCount: number;
	publisher: string;
	publishedDate: Date;
	printedPageCount: number;
	printType: string;
	previewLink: string;
	panelizationSummary: {
		containsEpubBubbles: boolean;
		containsImageBubbles: boolean;
	};
	pageCount: number;
	maturityRating: string;
	language: string;
	infoLink: string;
	industryIdentifiers: {
		identifier: string;
		type: string;
	}[];
	imageLinks: {
		large: string;
		medium: string;
		small: string;
		smallThumbnail: string;
		thumbnail: string;
	};
	dimensions?: {
		height: string;
	};
	description: string;
	contentVersion: string;
	categories: string[];
	canonicalVolumeLink: string;
	averageRating: number;
	authors: string[];
	allowAnonLogging: boolean;
}

interface accessInfo {
	accessViewStatus: string;
	country: string;
	embeddable: boolean;
	epub: {
		acsTokenLink: string;
		isAvailable: boolean;
	};
	pdf: {
		isAvalibale: boolean;
	};
	publicDomain: boolean;
	quoteSharingAllowed: boolean;
	textToSpeechPermission: string;
	viewability: string;
	webReaderLink: string;
}

interface Price {
	amountInMicros: number;
	currencyCode: string;
}

interface saleInfo {
	saleability: string;
	retailPrice: {
		currencyCode: string;
		amount: number;
	};
	offers: {
		finskyOfferType: number;
		retailPrice: Price;
		listPrice: Price;
	}[];
	listPrice: Price;
	isEbook: boolean;
	country: string;
	buyLink: string;
}

export interface IBook {
	volumeInfo: volumeInfo;
	selfLink: string;
	saleInfo: saleInfo;
	layerInfo: {
		layers: {
			layerId: string;
			volumeAnnotationsVersion: string;
		}[];
	};
	kind: string;
	id: string;
	etag: string;
	accessInfo: accessInfo;
}


export interface ISearchedBooks {
	kind: string;
	totalItems: number;
	items: IBook[];
}