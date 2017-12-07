//
//  ViewController.m
//  LearnAnimated
//
//  Created by DFD on 2017/12/6.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation RNBridgeModule

RCT_EXPORT_MODULE();

//RN传参数调用原生OC,并且返回数据给RN  通过CallBack
RCT_EXPORT_METHOD(RNInvokeOCCallBack:(NSDictionary *)dictionary callback:(RCTResponseSenderBlock)callback){
  NSLog(@"接收到RN传过来的数据为:%@",dictionary);
  NSArray *events = [[NSArray alloc] initWithObjects:@"张三",@"李四", nil];
  callback(@[[NSNull null], events]);
}

@end

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    self.view.backgroundColor = [UIColor whiteColor];
}

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
  
  NSURL *jsCodeLocation;
  
  // 原生的属性
  NSArray *imageList = @[@"http://192.168.0.28/%E6%B5%8B%E8%AF%95%E5%9B%BE%E7%89%87/compressPicUrl.png"];
  NSDictionary *props = @{@"images" : imageList};
  
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"LearnAnimated"
                                               initialProperties:props
                                                   launchOptions:nil];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  UIViewController *rnController = UIViewController.new;
  rnController.view = rootView;
  
  [self.navigationController pushViewController:rnController animated:YES];
}

@end
