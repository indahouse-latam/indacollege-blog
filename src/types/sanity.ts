/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type Article = {
  _id: string;
  _type: "article";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  mainImage?: string;
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  views?: number;
  publishedAt?: string;
  body?: string;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  hashPassword?: string;
  image?: string;
  bio?: string;
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Markdown = string;

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityImageHotspot | SanityImageCrop | SanityFileAsset | SanityImageAsset | SanityImageMetadata | Geopoint | SanityAssetSourceData | Article | Author | Category | Slug | Markdown;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: ARTICLES_QUERY
// Query: *[  _type == "article" &&   defined(slug.current) &&   (!defined($search) || title match $search || categories[]->title match $search || author->name match $search)] | order(publishedAt desc) {  _id,  title,  slug,  publishedAt,  views,  author -> {    _id,    name,    image,    bio  },  mainImage,  categories[] -> {    _id,    title  },  body}
export type ARTICLES_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  publishedAt: string | null;
  views: number | null;
  author: {
    _id: string;
    name: string | null;
    image: string | null;
    bio: string | null;
  } | null;
  mainImage: string | null;
  categories: Array<{
    _id: string;
    title: string | null;
  }> | null;
  body: string | null;
}>;
// Variable: ARTICLE_VIEW_QUERY
// Query: *[    _type == "article" &&     _id == $id  ][0] {    _id,    views  }
export type ARTICLE_VIEW_QUERYResult = {
  _id: string;
  views: number | null;
} | null;
// Variable: AUTHOR_BY_GOOGLE_ID_QUERY
// Query: *[    _type == "author" &&     id == $id  ][0] {    _id,    id,    name,    username,    email,    image,    bio  }
export type AUTHOR_BY_GOOGLE_ID_QUERYResult = {
  _id: string;
  id: number | null;
  name: string | null;
  username: string | null;
  email: string | null;
  image: string | null;
  bio: string | null;
} | null;
// Variable: AUTHOR_BY_EMAIL_QUERY
// Query: *[    _type == "author" &&     email == $email  ][0] {    _id,    id,    name,    username,    email,    image,    bio,    hashPassword  }
export type AUTHOR_BY_EMAIL_QUERYResult = {
  _id: string;
  id: number | null;
  name: string | null;
  username: string | null;
  email: string | null;
  image: string | null;
  bio: string | null;
  hashPassword: string | null;
} | null;
// Variable: AUTHOR_BY_ID_QUERY
// Query: *[    _type == "author" &&     _id == $id  ][0] {    _id,    id,    name,    username,    email,    image,    bio  }
export type AUTHOR_BY_ID_QUERYResult = {
  _id: string;
  id: number | null;
  name: string | null;
  username: string | null;
  email: string | null;
  image: string | null;
  bio: string | null;
} | null;
// Variable: PLAYLIST_BY_SLUG_QUERY
// Query: *[    _type == "playlist" &&     slug.current == $slug  ][0] {    _id,    title,    slug,    select[] -> {      _id,      publishedAt,      title,      slug,      author -> {        _id,        name,        slug,        image,        bio      },      mainImage,      categories[] -> {        _id,        title      },      body    }  }
export type PLAYLIST_BY_SLUG_QUERYResult = null;
// Variable: ARTICLES_BY_AUTHOR_QUERY
// Query: *[    _type == "article" &&     author._ref == $id  ] | order(publishedAt desc) {    _id,    title,    slug,    publishedAt,    views,    author -> {      _id,      name,      image,      bio    },    mainImage,    categories[] -> {      _id,      title    },    body  }
export type ARTICLES_BY_AUTHOR_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  publishedAt: string | null;
  views: number | null;
  author: {
    _id: string;
    name: string | null;
    image: string | null;
    bio: string | null;
  } | null;
  mainImage: string | null;
  categories: Array<{
    _id: string;
    title: string | null;
  }> | null;
  body: string | null;
}>;
// Variable: ARTICLES_BY_ID_QUERY
// Query: *[    _type == "article" &&     _id == $id  ][0] {    _id,    title,    slug,    publishedAt,    views,    author -> {      _id,      name,      username,      image,      bio    },    mainImage,    categories[] -> {      _id,      title    },    body  }
export type ARTICLES_BY_ID_QUERYResult = {
  _id: string;
  title: string | null;
  slug: Slug | null;
  publishedAt: string | null;
  views: number | null;
  author: {
    _id: string;
    name: string | null;
    username: string | null;
    image: string | null;
    bio: string | null;
  } | null;
  mainImage: string | null;
  categories: Array<{
    _id: string;
    title: string | null;
  }> | null;
  body: string | null;
} | null;
// Variable: ARTICLES_BY_CATEGORY_QUERY
// Query: *[    _type == "article" &&     $categoryId in categories[]._ref  ] | order(publishedAt desc) {    _id,    title,    slug,    publishedAt,    views,    author -> {      _id,      name,      image,      bio    },    mainImage,    categories[] -> {      _id,      title    },    body  }
export type ARTICLES_BY_CATEGORY_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  publishedAt: string | null;
  views: number | null;
  author: {
    _id: string;
    name: string | null;
    image: string | null;
    bio: string | null;
  } | null;
  mainImage: string | null;
  categories: Array<{
    _id: string;
    title: string | null;
  }> | null;
  body: string | null;
}>;
// Variable: CATEGORIES_QUERY
// Query: *[_type == "category"] | order(publishedAt desc) {    _id,    title  }
export type CATEGORIES_QUERYResult = Array<{
  _id: string;
  title: string | null;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[\n  _type == \"article\" && \n  defined(slug.current) && \n  (!defined($search) || title match $search || categories[]->title match $search || author->name match $search)\n] | order(publishedAt desc) {\n  _id,\n  title,\n  slug,\n  publishedAt,\n  views,\n  author -> {\n    _id,\n    name,\n    image,\n    bio\n  },\n  mainImage,\n  categories[] -> {\n    _id,\n    title\n  },\n  body\n}": ARTICLES_QUERYResult;
    "\n  *[\n    _type == \"article\" && \n    _id == $id\n  ][0] {\n    _id,\n    views\n  }\n": ARTICLE_VIEW_QUERYResult;
    "\n  *[\n    _type == \"author\" && \n    id == $id\n  ][0] {\n    _id,\n    id,\n    name,\n    username,\n    email,\n    image,\n    bio\n  }\n": AUTHOR_BY_GOOGLE_ID_QUERYResult;
    "\n  *[\n    _type == \"author\" && \n    email == $email\n  ][0] {\n    _id,\n    id,\n    name,\n    username,\n    email,\n    image,\n    bio,\n    hashPassword\n  }\n": AUTHOR_BY_EMAIL_QUERYResult;
    "\n  *[\n    _type == \"author\" && \n    _id == $id\n  ][0] {\n    _id,\n    id,\n    name,\n    username,\n    email,\n    image,\n    bio\n  }\n": AUTHOR_BY_ID_QUERYResult;
    "\n  *[\n    _type == \"playlist\" && \n    slug.current == $slug\n  ][0] {\n    _id,\n    title,\n    slug,\n    select[] -> {\n      _id,\n      publishedAt,\n      title,\n      slug,\n      author -> {\n        _id,\n        name,\n        slug,\n        image,\n        bio\n      },\n      mainImage,\n      categories[] -> {\n        _id,\n        title\n      },\n      body\n    }\n  }\n": PLAYLIST_BY_SLUG_QUERYResult;
    "\n  *[\n    _type == \"article\" && \n    author._ref == $id\n  ] | order(publishedAt desc) {\n    _id,\n    title,\n    slug,\n    publishedAt,\n    views,\n    author -> {\n      _id,\n      name,\n      image,\n      bio\n    },\n    mainImage,\n    categories[] -> {\n      _id,\n      title\n    },\n    body\n  }\n": ARTICLES_BY_AUTHOR_QUERYResult;
    "\n  *[\n    _type == \"article\" && \n    _id == $id\n  ][0] {\n    _id,\n    title,\n    slug,\n    publishedAt,\n    views,\n    author -> {\n      _id,\n      name,\n      username,\n      image,\n      bio\n    },\n    mainImage,\n    categories[] -> {\n      _id,\n      title\n    },\n    body\n  }\n": ARTICLES_BY_ID_QUERYResult;
    "\n  *[\n    _type == \"article\" && \n    $categoryId in categories[]._ref\n  ] | order(publishedAt desc) {\n    _id,\n    title,\n    slug,\n    publishedAt,\n    views,\n    author -> {\n      _id,\n      name,\n      image,\n      bio\n    },\n    mainImage,\n    categories[] -> {\n      _id,\n      title\n    },\n    body\n  }\n": ARTICLES_BY_CATEGORY_QUERYResult;
    " \n  *[_type == \"category\"] | order(publishedAt desc) {\n    _id,\n    title\n  }": CATEGORIES_QUERYResult;
  }
}
