// register all screens of the app (including internal ones)

/**
 * @flow
 */
import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';

import Drawer from './src/android/Drawer';

import SectionListScene from './src/SectionListScene';
import BasicListScene from './src/BasicListScene';

import BasicButtons from './src/component/basic/BasicButtons'

export function registerScreens() {
    Navigation.registerComponent('learning.Drawer', () => Drawer);
    Navigation.registerComponent('learning.Basic', () => BasicListScene);
    Navigation.registerComponent('learning.Basic.buttons', () => BasicButtons);

    Navigation.registerComponent('learning.Section', () => SectionListScene);
}

// /*
export function registerScreenVisibilityListener() {
    new ScreenVisibilityListener({
        willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
        didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
        willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
        didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
    }).register();
}
// */