/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { CommonConstants } from '@bundle:com.huawei.targetmanagement/entry/ets/common/constant/CommonConstant';
import Logger from '@bundle:com.huawei.targetmanagement/entry/ets/common/utils/Logger';
const TAG = '[DataModel]';
/**
 * Saving and manipulating data displayed on the page.
 */
export class DataModel {
    constructor() {
        /**
         * Saved data.
         */
        this.targetData = [];
    }
    /**
     * Get the latest data.
     */
    getData() {
        return this.targetData;
    }
    /**
     * Delete the selected data.
     *
     * @param selectArr: An array indicating whether historical data is selected.
     */
    deleteData(selectArr) {
        if (!selectArr) {
            Logger.error(TAG, 'Failed to delete data because selectArr is ' + selectArr);
        }
        let dataLen = this.targetData.length - CommonConstants.ONE_TASK;
        for (let i = dataLen; i >= 0; i--) {
            if (selectArr[i]) {
                this.targetData.splice(i, CommonConstants.ONE_TASK);
            }
        }
    }
    /**
     * Add data to targetData.
     *
     * @param Data of the RecordItemBean type to be added.
     */
    addData(data) {
        if (!data) {
            Logger.error(TAG, 'addData error because data is: ' + data);
            return;
        }
        this.targetData.push(data);
    }
    /**
     * Get the latest progress.
     */
    getLatestProgressValue() {
        if (this.targetData.length === 0) {
            return 0;
        }
        return this.targetData[this.targetData.length - CommonConstants.ONE_TASK].progressValue;
    }
    /**
     * Update data based on index and progress values and update date.
     *
     * @param index of update item.
     * @param updateValue of update item.
     * @param updateDate of update item.
     */
    updateProgress(index, updateValue, updateDate) {
        if (!this.targetData[index]) {
            return false;
        }
        this.targetData[index].progressValue = updateValue;
        this.targetData[index].updateDate = updateDate;
        return true;
    }
}
export default new DataModel();
/**
 * Task item entity class.
 */
export class TaskItemBean {
    /**
     * Construction method.
     *
     * @param progressValue progress value.
     * @param updateDate update time.
     */
    constructor(taskName, progressValue, updateDate) {
        this.taskName = taskName;
        this.progressValue = progressValue;
        this.updateDate = updateDate;
    }
}
//# sourceMappingURL=DataModel.js.map