import router from '@ohos.router';
import CommonConstants from '../common/constants/CommonConstants';
import Logger from '../common/utils/Logger';

const TAG = '[IndexPage]';

/**
 * The IndexPage is the entry point of the application.
 */
@Entry
@Component
struct IndexPage {
  @State message: string = CommonConstants.INDEX_MESSAGE;

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(CommonConstants.FONT_SIZE)
          .fontWeight(FontWeight.Bold)
        Blank()
        Button($r('app.string.next'))
          .fontSize(CommonConstants.BUTTON_FONT_SIZE)
          .width(CommonConstants.BUTTON_WIDTH)
          .height(CommonConstants.BUTTON_HEIGHT)
          .backgroundColor($r('app.color.button_bg'))
          .onClick(() => {
            router.pushUrl({
              // 跳转页面
              url: CommonConstants.SECOND_URL,
              // 跳转参数
              params: {
                src: CommonConstants.SECOND_SRC_MSG
              }
            }).catch((error: Error) => {
              Logger.info(TAG, 'IndexPage push error' + JSON.stringify(error));
            });
          })
      }
      .width(CommonConstants.FULL_WIDTH)
      .height(CommonConstants.LAYOUT_HEIGHT)
    }
    .height(CommonConstants.FULL_HEIGHT)
    .backgroundColor($r('app.color.page_bg'))
  }
}