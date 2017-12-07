//
//  LocalModule.m
//  RNiOSAndroid
//
//  Created by DFD on 2017/12/6.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "LocalModule.h"
#import <UIKit/UIKit.h>

@interface LocalModule()

@property (nonatomic, copy) RCTResponseSenderBlock callBack;

@end

@implementation LocalModule{
  bool hasListeners;
}

//导出这个类，不然js不能使用 默认导出当前类名
RCT_EXPORT_MODULE();

//导出一个方法 注意，当前线程为子线程 RCTResponseSenderBlock 设置回调函数 当然 ReactNative为我们提供了多种回到block
//RCT_EXPORT_METHOD(loginWithqq:(NSString *)qqkey callback:(RCTResponseSenderBlock)callback) {
//  NSLog(@"%@",[NSThread currentThread]);
//  //记录回调 有可能会在另一个方法中完成业务逻辑。
//  self.callBack = callback;
//  //模拟执行本地操作
//  NSString *code = [NSString stringWithFormat:@"%@%@",qqkey,@"---qq登陆成功---iOS"];
//  //回调到js函数
//  dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
//    [self addButton];
//    if (self.callBack) {
//      NSDictionary *info = @{@"result":code};
//      self.callBack(@[info]);
//    }
//  });
//}

// 暴露原生方法，给 js 调用
// 使用ES7的async/await语法
RCT_REMAP_METHOD(asyncLoginWithqq,qqkey:(NSString *)qqkey resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
  NSLog(@"%@",[NSThread currentThread]);
  //模拟登陆
  NSString *code = [NSString stringWithFormat:@"%@%@",qqkey,@"---qq登陆成功---iOS"];
  //回调到js函数
  dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
    [self addButton];
    if (resolve) {
      NSDictionary *info = @{@"result":code};
      resolve(info);
    }
  });
}
// 注册事件
- (NSArray<NSString *> *)supportedEvents {
  return @[@"QQLoginOut"];
}
//添加一个下线的按钮
- (void)addButton {
  //所有UI的操作都要在主线程中
  dispatch_async(dispatch_get_main_queue(), ^{
    UIButton *button = [UIButton buttonWithType:UIButtonTypeSystem];
    [button setTitle:@"ios的按钮——下线" forState:UIControlStateNormal];
    button.frame = CGRectMake(100, 40, 130, 30);
    [button setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    button.backgroundColor = [UIColor redColor];
    [[UIApplication sharedApplication].keyWindow addSubview:button];
    [button addTarget:self action:@selector(buttonclick:) forControlEvents:UIControlEventTouchUpInside];
  });
}
// 在添加第一个监听函数时触发
-(void)startObserving {
  hasListeners = YES;
}
// 取消监听时触发
-(void)stopObserving {
  hasListeners = NO;
}
//下线
- (void)buttonclick:(UIButton *)button {
  [button removeFromSuperview];
  if (hasListeners) {
    //如果有监听，才发送事件
    [self sendEventWithName:@"QQLoginOut" body:@{@"result":@1}];
  }
}


@end
