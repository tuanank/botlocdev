module.exports.config = {
  name: 'lọc',
  version: '2.0.1',
  hasPermssion: 1,
  credits: 'ProCoderMew',
  description: 'Lọc cá cảnh trong group',
  commandCategory: 'Hệ thống quản trị viên',
  usages: '[num]',
  cooldowns: 30,
}
const _0x4b34 = [
  'getData',
  'ng lệnh nà',
  'exp',
  'exports',
  '275826dvvglU',
  '1846qLKTIZ',
  'threadID',
  'nh.',
  'message',
  ' nào với m',
  'undefined',
  ' quản trị ',
  'Hiện tại c',
  'Đã lọc thà',
  ' Tiến hành',
  '1084351qNJEqx',
  'push',
  'nh công ',
  'on cá cảnh',
  ' thể sử dụ',
  'messageID',
  '926611pGwjUw',
  'map',
  '1034631aSKRnK',
  'sendMessag',
  'ức lọc ',
  '630489kUFAtE',
  '964DkDWWO',
  'some',
  'Bot cần là',
  'UserID',
  '678976gXnmuM',
  'length',
  ' lọc..',
  'nh với mức',
  'Lọc thất l',
  'Không có c',
  ' con cá cả',
  'nfo',
  'adminIDs',
]
function _0x5eb7(_0x4e9d07, _0x3e4f76) {
  _0x4e9d07 = _0x4e9d07 - 434
  let _0x580eb6 = _0x4b34[_0x4e9d07]
  return _0x580eb6
}
const _0x2af510 = function (_0x371811, _0x442757) {
  return _0x5eb7(_0x442757 - -449, _0x371811)
}
;(function (_0x17a1a0, _0x4108fb) {
  const _0x28923e = function (_0x4f9d86, _0x18c893) {
    return _0x5eb7(_0x4f9d86 - -29, _0x18c893)
  }
  while (true) {
    try {
      const _0x188063 =
        -parseInt(_0x28923e(406, 421)) +
        parseInt(_0x28923e(409, 396)) +
        -parseInt(_0x28923e(444, 448)) +
        -parseInt(_0x28923e(427, 446)) +
        -parseInt(_0x28923e(414, 408)) +
        parseInt(_0x28923e(438, 419)) +
        parseInt(_0x28923e(428, 420)) * parseInt(_0x28923e(410, 394))
      if (_0x188063 === _0x4108fb) {
        break
      } else {
        _0x17a1a0.push(_0x17a1a0.shift())
      }
    } catch (_0x3f29e8) {
      _0x17a1a0.push(_0x17a1a0.shift())
    }
  }
})(_0x4b34, 578340)
module[_0x2af510(18, 6)].run = async function ({
  api: _0x3f9f02,
  event: _0x3b4b9d,
  args: _0x1c7a02,
  Currencies: _0x2fff46,
}) {
  const _0x4e7c07 = function (_0x3ec5d2, _0x2922ea) {
    return _0x2af510(_0x3ec5d2, _0x2922ea - 159)
  }
  var _0x4fb4e5 = await _0x3f9f02['getThreadI' + _0x4e7c07(165, 160)](
    _0x3b4b9d.threadID
  )
  let _0x4d07e9 = [],
    _0x39fdf1,
    _0x579258 = 0,
    _0xb28e51 = 0,
    _0xd9b6f5 = 0
  if (!isNaN(_0x1c7a02[0])) {
    _0x39fdf1 = _0x1c7a02[0]
  } else {
    _0x39fdf1 = 0
  }
  if (
    !_0x4fb4e5[_0x4e7c07(172, 161)]
      [_0x4e7c07(137, 144)]((_0x2ee8ce) => _0x2ee8ce.id)
      [_0x4e7c07(138, 150)](
        (_0x930ad3) =>
          _0x930ad3 == _0x3f9f02['getCurrent' + _0x4e7c07(165, 152)]()
      )
  ) {
    return _0x3f9f02.sendMessage(
      _0x4e7c07(140, 151) +
        _0x4e7c07(153, 173) +
        'viên để có' +
        _0x4e7c07(166, 181) +
        _0x4e7c07(175, 163) +
        'y.',
      _0x3b4b9d[_0x4e7c07(184, 168)],
      _0x3b4b9d[_0x4e7c07(184, 182)]
    )
  }
  for (const _0x39b0ce of _0x4fb4e5.userInfo) {
    const _0x17a1c6 = await _0x2fff46[_0x4e7c07(152, 162)](_0x39b0ce.id)
    if (
      typeof _0x17a1c6[_0x4e7c07(157, 164)] == _0x4e7c07(182, 172) ||
      _0x17a1c6[_0x4e7c07(171, 164)] <= _0x39fdf1
    ) {
      _0x4d07e9[_0x4e7c07(165, 178)](_0x39b0ce.id)
    }
  }
  _0x4d07e9 = _0x4d07e9.filter(
    (_0x341905) =>
      !_0x4fb4e5[_0x4e7c07(145, 161)]
        [_0x4e7c07(137, 144)]((_0x4cf6e7) => _0x4cf6e7.id)
        [_0x4e7c07(158, 150)]((_0x44ae5a) => _0x44ae5a == _0x341905)
  )
  if (_0x4d07e9[_0x4e7c07(134, 154)] != 0) {
    _0x3f9f02[_0x4e7c07(145, 146) + 'e'](
      _0x4e7c07(167, 174) +
        'ó ' +
        _0x4d07e9[_0x4e7c07(172, 154)].toString() +
        (_0x4e7c07(144, 159) + _0x4e7c07(153, 156) + ' lọc ') +
        _0x39fdf1 +
        (' tin nhắn.' + _0x4e7c07(183, 176) + _0x4e7c07(158, 155)),
      _0x3b4b9d[_0x4e7c07(149, 168)],
      async () => {
        const _0xc07b08 = function (_0x43f760, _0x2dd2f3) {
          return _0x4e7c07(_0x2dd2f3, _0x43f760 - 414)
        }
        for (const _0x4879c6 of _0x4d07e9) {
          try {
            await new Promise((_0x1e4fde) => setTimeout(_0x1e4fde, 1000))
            await _0x3f9f02.removeUserFromGroup(
              parseInt(_0x4879c6),
              _0x3b4b9d[_0xc07b08(582, 586)]
            )
            _0x579258++
          } catch (_0x2c0db6) {
            console.log(_0x2c0db6.name + ': ' + _0x2c0db6[_0xc07b08(584, 579)])
            _0xb28e51++
          }
          _0xd9b6f5++
        }
        if (_0xd9b6f5 == _0x4d07e9[_0xc07b08(568, 585)]) {
          return _0x3f9f02[_0xc07b08(560, 574) + 'e'](
            _0xc07b08(589, 592) +
              _0xc07b08(593, 580) +
              _0x579258 +
              (_0xc07b08(573, 574) + _0xc07b08(583, 574)),
            _0x3b4b9d[_0xc07b08(582, 572)],
            () =>
              _0xb28e51 == 0
                ? ''
                : _0x3f9f02[_0xc07b08(560, 571) + 'e'](
                    _0xc07b08(571, 567) +
                      'ại ' +
                      _0xb28e51 +
                      (' con cá cả' + _0xc07b08(583, 574)),
                    _0x3b4b9d.threadID
                  )
          )
        }
      },
      _0x3b4b9d[_0x4e7c07(176, 182)]
    )
  } else {
    return _0x3f9f02[_0x4e7c07(129, 146) + 'e'](
      _0x4e7c07(166, 158) +
        _0x4e7c07(168, 180) +
        _0x4e7c07(177, 171) +
        _0x4e7c07(141, 147) +
        _0x39fdf1 +
        ' tin nhắn..',
      _0x3b4b9d[_0x4e7c07(180, 168)],
      _0x3b4b9d[_0x4e7c07(178, 182)]
    )
  }
}
