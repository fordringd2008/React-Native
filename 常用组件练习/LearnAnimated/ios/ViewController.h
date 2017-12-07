//
//  ViewController.h
//  LearnAnimated
//
//  Created by DFD on 2017/12/6.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>
// 桥接协议
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RNBridgeModule : RCTEventEmitter<RCTBridgeModule>

@end

@interface ViewController : UIViewController

@end
