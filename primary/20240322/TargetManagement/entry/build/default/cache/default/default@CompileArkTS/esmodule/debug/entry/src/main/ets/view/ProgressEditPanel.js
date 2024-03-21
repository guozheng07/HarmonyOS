/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { CommonConstants } from '@bundle:com.huawei.targetmanagement/entry/ets/common/constant/CommonConstant';
export default class ProgressEditPanel extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__sliderMode = new SynchedPropertySimpleTwoWayPU(params.sliderMode, this, "sliderMode");
        this.__slidingProgress = new SynchedPropertySimpleOneWayPU(params.slidingProgress, this, "slidingProgress");
        this.onCancel = undefined;
        this.onClickOK = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.slidingProgress !== undefined) {
            this.__slidingProgress.set(params.slidingProgress);
        }
        else {
            this.__slidingProgress.set(0);
        }
        if (params.onCancel !== undefined) {
            this.onCancel = params.onCancel;
        }
        if (params.onClickOK !== undefined) {
            this.onClickOK = params.onClickOK;
        }
    }
    updateStateVars(params) {
        this.__slidingProgress.reset(params.slidingProgress);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__sliderMode.purgeDependencyOnElmtId(rmElmtId);
        this.__slidingProgress.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__sliderMode.aboutToBeDeleted();
        this.__slidingProgress.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get sliderMode() {
        return this.__sliderMode.get();
    }
    set sliderMode(newValue) {
        this.__sliderMode.set(newValue);
    }
    get slidingProgress() {
        return this.__slidingProgress.get();
    }
    set slidingProgress(newValue) {
        this.__slidingProgress.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.height({ "id": 16777257, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Column.width(CommonConstants.FULL_WIDTH);
            Column.justifyContent(FlexAlign.End);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width(CommonConstants.SLIDER_WIDTH);
            Row.height(CommonConstants.SLIDER_HEIGHT);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Slider.create({
                value: this.slidingProgress,
                min: CommonConstants.SLIDER_MIN_VALUE,
                max: CommonConstants.SLIDER_MAX_VALUE,
                style: SliderStyle.InSet,
                step: CommonConstants.SLIDER_STEP
            });
            Slider.width(CommonConstants.SLIDER_INNER_WIDTH);
            Slider.onChange((value, mode) => {
                this.slidingProgress = Math.floor(value);
                this.sliderMode = mode;
            });
            if (!isInitialRender) {
                Slider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`${this.slidingProgress}%`);
            Text.fontSize({ "id": 16777270, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT);
            Text.fontColor({ "id": 16777238, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.textAlign(TextAlign.Center);
            Text.margin({ left: { "id": 16777275, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.margin({ top: CommonConstants.SLIDER_BUTTON_MARGIN });
            Row.width(CommonConstants.DIALOG_OPERATION_WIDTH);
            Row.justifyContent(FlexAlign.SpaceBetween);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            __Common__.create();
            __Common__.onClick(() => {
                if (this.onCancel !== undefined) {
                    this.onCancel();
                }
            });
            if (!isInitialRender) {
                __Common__.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new CustomButton(this, {
                        buttonText: { "id": 16777222, "type": 10003, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" }
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        __Common__.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            __Common__.create();
            __Common__.onClick(() => {
                if (this.onClickOK !== undefined) {
                    this.onClickOK(this.slidingProgress);
                }
            });
            if (!isInitialRender) {
                __Common__.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new CustomButton(this, {
                        buttonText: { "id": 16777224, "type": 10003, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" }
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        __Common__.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class CustomButton extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__buttonColor = new ObservedPropertyObjectPU({ "id": 16777244, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" }, this, "buttonColor");
        this.buttonText = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.buttonColor !== undefined) {
            this.buttonColor = params.buttonColor;
        }
        if (params.buttonText !== undefined) {
            this.buttonText = params.buttonText;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__buttonColor.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__buttonColor.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get buttonColor() {
        return this.__buttonColor.get();
    }
    set buttonColor(newValue) {
        this.__buttonColor.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.buttonText);
            __Text__dialogButtonStyle();
            Text.backgroundColor(ObservedObject.GetRawObject(this.buttonColor));
            Text.borderRadius(CommonConstants.LIST_RADIUS);
            Text.textAlign(TextAlign.Center);
            Text.onTouch((event) => {
                if (event !== undefined && event.type === TouchType.Down) {
                    this.buttonColor = { "id": 16777237, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" };
                }
                if (event !== undefined && event.type === TouchType.Up) {
                    this.buttonColor = { "id": 16777244, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" };
                }
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
/**
 * Custom button style.
 */
function __Text__dialogButtonStyle() {
    Text.fontSize({ "id": 16777246, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
    Text.height({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
    Text.width({ "id": 16777251, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
    Text.fontColor({ "id": 16777242, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
}
//# sourceMappingURL=ProgressEditPanel.js.map