export interface INavigationMenuItem {
  text: String,
  href?: String
}

export interface IHooperSliderProps {
  itemsToShow?: Number,
  itemsToSlide?: Number,
  initialSlide?: Number,
  infiniteScroll?: Boolean,
  centerMode?: Boolean,
  vertical?: Boolean,
  rtl?: Boolean,
  mouseDrag?:Boolean,
  touchDrag?:Boolean,
  wheelControl?:Boolean,
  keysControl?:Boolean,
  shortDrag?:Boolean,
  autoPlay?:Boolean,
  playSpeed?: Number,
  transition?: Number,
  group?: any,
  hoverPause?: Boolean,
  trimWhiteSpace?: Boolean,
  settings?: any,
}

export interface IWordsArray {
    word: String,
    strong: Boolean
}

export interface ISliderItem {
    sentence: IWordsArray[]
}

export interface IUserLittleInfo {
  name: String,
  secondName: String,
  fullName: String,
  jobPosition: {
    field: String,
    position: String
  },
  imageUrl: String
}
