//
//  LocalModule.h
//  RNiOSAndroid
//
//  Created by DFD on 2017/12/6.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>     // iOS向js通信 必须继承这个类

@interface LocalModule : RCTEventEmitter<RCTBridgeModule>

@end
