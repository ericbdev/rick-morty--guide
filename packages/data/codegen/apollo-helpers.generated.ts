import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type CharacterKeySpecifier = ('created' | 'episode' | 'gender' | 'id' | 'image' | 'location' | 'name' | 'origin' | 'species' | 'status' | 'type' | CharacterKeySpecifier)[];
export type CharacterFieldPolicy = {
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	episode?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	origin?: FieldPolicy<any> | FieldReadFunction<any>,
	species?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CharactersKeySpecifier = ('info' | 'results' | CharactersKeySpecifier)[];
export type CharactersFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EpisodeKeySpecifier = ('air_date' | 'characters' | 'created' | 'episode' | 'id' | 'name' | EpisodeKeySpecifier)[];
export type EpisodeFieldPolicy = {
	air_date?: FieldPolicy<any> | FieldReadFunction<any>,
	characters?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	episode?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EpisodesKeySpecifier = ('info' | 'results' | EpisodesKeySpecifier)[];
export type EpisodesFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InfoKeySpecifier = ('count' | 'next' | 'pages' | 'prev' | InfoKeySpecifier)[];
export type InfoFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	next?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	prev?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationKeySpecifier = ('created' | 'dimension' | 'id' | 'name' | 'residents' | 'type' | LocationKeySpecifier)[];
export type LocationFieldPolicy = {
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	dimension?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	residents?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationsKeySpecifier = ('info' | 'results' | LocationsKeySpecifier)[];
export type LocationsFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('character' | 'characters' | 'charactersByIds' | 'episode' | 'episodes' | 'episodesByIds' | 'location' | 'locations' | 'locationsByIds' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	character?: FieldPolicy<any> | FieldReadFunction<any>,
	characters?: FieldPolicy<any> | FieldReadFunction<any>,
	charactersByIds?: FieldPolicy<any> | FieldReadFunction<any>,
	episode?: FieldPolicy<any> | FieldReadFunction<any>,
	episodes?: FieldPolicy<any> | FieldReadFunction<any>,
	episodesByIds?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locations?: FieldPolicy<any> | FieldReadFunction<any>,
	locationsByIds?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Character?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CharacterKeySpecifier | (() => undefined | CharacterKeySpecifier),
		fields?: CharacterFieldPolicy,
	},
	Characters?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CharactersKeySpecifier | (() => undefined | CharactersKeySpecifier),
		fields?: CharactersFieldPolicy,
	},
	Episode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EpisodeKeySpecifier | (() => undefined | EpisodeKeySpecifier),
		fields?: EpisodeFieldPolicy,
	},
	Episodes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EpisodesKeySpecifier | (() => undefined | EpisodesKeySpecifier),
		fields?: EpisodesFieldPolicy,
	},
	Info?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InfoKeySpecifier | (() => undefined | InfoKeySpecifier),
		fields?: InfoFieldPolicy,
	},
	Location?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationKeySpecifier | (() => undefined | LocationKeySpecifier),
		fields?: LocationFieldPolicy,
	},
	Locations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationsKeySpecifier | (() => undefined | LocationsKeySpecifier),
		fields?: LocationsFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;