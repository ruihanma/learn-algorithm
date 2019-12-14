/**
 * 1. 两数之和
 */
var nums = [
  876,
  879,
  155,
  291,
  431,
  296,
  592,
  965,
  502,
  173,
  869,
  504,
  258,
  342,
  192,
  478,
  270,
  341,
  811,
  794,
  472,
  625,
  229,
  829,
  122,
  858,
  738,
  481,
  102,
  946,
  305,
  399,
  216,
  752,
  413,
  352,
  271,
  193,
  534,
  508,
  152,
  989,
  154,
  456,
  168,
  510,
  391,
  28,
  317,
  409,
  609,
  532,
  784,
  160,
  696,
  105,
  245,
  231,
  20,
  17,
  81,
  781,
  79,
  816,
  918,
  838,
  123,
  602,
  338,
  997,
  192,
  947,
  388,
  515,
  510,
  441,
  175,
  539,
  708,
  980,
  207,
  336,
  524,
  610,
  3,
  427,
  282,
  84,
  953,
  855,
  117,
  737,
  288,
  371,
  623,
  484,
  738,
  874,
  426,
  202,
  481,
  132,
  499,
  500,
  89,
  786,
  276,
  221,
  857,
  398,
  242,
  639,
  771,
  149,
  758,
  775,
  39,
  836,
  70,
  903,
  193,
  959,
  169,
  851,
  798,
  815,
  755,
  498,
  308,
  70,
  217,
  765,
  504,
  498,
  56,
  547,
  578,
  977,
  882,
  909,
  9,
  874,
  223,
  39,
  429,
  982,
  129,
  712,
  77,
  996,
  43,
  613,
  800,
  810,
  73,
  993,
  763,
  978,
  912,
  255,
  468,
  937,
  987,
  701,
  155,
  347,
  980,
  147,
  698,
  41,
  353,
  178,
  396,
  241,
  71,
  482,
  40,
  593,
  993,
  959,
  193,
  544,
  376,
  752,
  804,
  194,
  800,
  837,
  673,
  261,
  348,
  963,
  918,
  217,
  945,
  271,
  493,
  538,
  203,
  54,
  850,
  753,
  954,
  312,
  584,
  399,
  504,
  62,
  124,
  790,
  542,
  239,
  662,
  410,
  12,
  362,
  798,
  726,
  798,
  780,
  785,
  737,
  280,
  931,
  452,
  643,
  362,
  190,
  975,
  520,
  219,
  330,
  290,
  451,
  22,
  756,
  837,
  787,
  758,
  661,
  75,
  697,
  419,
  485,
  290,
  84,
  401,
  447,
  400,
  311,
  121,
  216,
  574,
  724,
  733,
  496,
  680,
  831,
  736,
  43,
  578,
  201,
  109,
  197,
  125,
  66,
  739,
  339,
  925,
  148,
  381,
  513,
  152,
  305,
  603,
  516,
  979,
  133,
  993,
  430,
  167,
  826,
  526,
  290,
  562,
  559,
  947,
  448,
  903,
  289,
  259,
  221,
  915,
  71,
  879,
  639,
  390,
  588,
  496,
  430,
  778,
  722,
  421,
  821,
  436,
  621,
  959,
  728,
  81,
  117,
  202,
  17,
  408,
  829,
  438,
  970,
  93,
  738,
  838,
  902,
  248,
  128,
  903,
  800,
  567,
  829,
  3,
  407,
  306,
  773,
  71,
  323,
  492,
  305,
  301,
  28,
  220,
  455,
  320,
  478,
  873,
  483,
  521,
  260,
  460,
  342,
  846,
  577,
  874,
  530,
  588,
  965,
  985,
  606,
  410,
  443,
  662,
  81,
  667,
  27,
  912,
  602,
  957,
  822,
  164,
  489,
  942,
  414,
  549,
  991,
  747,
  680,
  498,
  831,
  805,
  89,
  846,
  467,
  909,
  7,
  651,
  250,
  534,
  984,
  587,
  348,
  150,
  329,
  194,
  20,
  519,
  250,
  232,
  224,
  378,
  539,
  83,
  177,
  872,
  130,
  419,
  387,
  654,
  917,
  259,
  447,
  979,
  184,
  965,
  51,
  349,
  422,
  983,
  682,
  172,
  177,
  177,
  484,
  652,
  930,
  495,
  65,
  511,
  318,
  621,
  297,
  803,
  476,
  370,
  826,
  328,
  150,
  354,
  393,
  900,
  340,
  73,
  781,
  70,
  260,
  293,
  862,
  335,
  395,
  51,
  326,
  363,
  78,
  968,
  446,
  565,
  683,
  654,
  767,
  719,
  324,
  2,
  617,
  451,
  56,
  789,
  464,
  119,
  53,
  269,
  369,
  137,
  612,
  54,
  217,
  719,
  823,
  601,
  663,
  310,
  594,
  301,
  636,
  22,
  333,
  351,
  126,
  810,
  812,
  827,
  634,
  441,
  534,
  434,
  967,
  637,
  795,
  335,
  965,
  876,
  778,
  987,
  217,
  451,
  264,
  341,
  566,
  656,
  612,
  413,
  682,
  429,
  161,
  801,
  167,
  309,
  846,
  754,
  541,
  9,
  711,
  707,
  848,
  989,
  580,
  20,
  431,
  163,
  252,
  200,
  54,
  56,
  666,
  425,
  592,
  513,
  230,
  894,
  20,
  260,
  282,
  297,
  129,
  414,
  326,
  577,
  184,
  698,
  620,
  138,
  131,
  236,
  848,
  995,
  879,
  354,
  107,
  67,
  92,
  260,
  531,
  757,
  640,
  305,
  848,
  959,
  416,
  109,
  513,
  769,
  131,
  501,
  197,
  225,
  358,
  67,
  663,
  761,
  742,
  83,
  648,
  230,
  59,
  873,
  231,
  228,
  470,
  503,
  615,
  245,
  258,
  84,
  832,
  132,
  156,
  324,
  27,
  583,
  766,
  676,
  130,
  978,
  306,
  387,
  733,
  592,
  763,
  592,
  487,
  504,
  493,
  139,
  897,
  290,
  432,
  976,
  946,
  24,
  586,
  104,
  648,
  333,
  2,
  359,
  166,
  968,
  990,
  39,
  353,
  376,
  839,
  9,
  75,
  874,
  203,
  762,
  489,
  21,
  14,
  888,
  570,
  449,
  539,
  772,
  919,
  697,
  883,
  278,
  18,
  151,
  113,
  148,
  330,
  158,
  772,
  852,
  93,
  288,
  213,
  299,
  338,
  297,
  862,
  371,
  708,
  815,
  108,
  326,
  115,
  923,
  541,
  144,
  521,
  441,
  99,
  773,
  950,
  519,
  948,
  258,
  328,
  624,
  936,
  681,
  935,
  328,
  70,
  826,
  110,
  153,
  236,
  191,
  222,
  340,
  653,
  918,
  976,
  857,
  184,
  193,
  397,
  39,
  190,
  147,
  763,
  760,
  95,
  917,
  559,
  529,
  680,
  376,
  389,
  215,
  705,
  586,
  205,
  653,
  324,
  960,
  33,
  404,
  888,
  680,
  95,
  263,
  860,
  150,
  683,
  930,
  588,
  9,
  690,
  919,
  745,
  815,
  331,
  425,
  879,
  648,
  398,
  2,
  997,
  865,
  429,
  399,
  264,
  704,
  699,
  333,
  126,
  753,
  565,
  529,
  35,
  520,
  94,
  401,
  552,
  592,
  543,
  864,
  23,
  764,
  763,
  51,
  631,
  348,
  198,
  255,
  73,
  281,
  996,
  371,
  23,
  581,
  84,
  367,
  469,
  604,
  716,
  393,
  942,
  764,
  239,
  502,
  501,
  973,
  438,
  760,
  398,
  158,
  853,
  178,
  348,
  659,
  1000,
  739,
  296,
  444,
  587,
  528,
  355,
  867,
  615,
  847,
  885,
  160,
  357,
  618,
  959,
  330,
  82,
  182,
  59,
  224,
  355,
  250,
  270,
  447,
  534,
  97,
  590,
  284,
  909,
  406,
  954,
  419,
  909,
  158,
  626,
  818,
  350,
  994,
  609,
  540,
  957,
  152,
  827,
  830,
  386,
  380,
  318,
  580,
  853,
  440,
  789,
  432,
  710,
  955,
  381,
  241,
  930,
  880,
  632,
  750,
  876,
  189,
  662,
  127,
  434,
  38,
  144,
  20,
  424,
  27,
  466,
  538,
  158,
  416,
  508,
  990,
  650,
  698,
  990,
  970,
  663,
  121,
  9,
  713,
  489,
  977,
  530,
  694,
  141,
  930,
  169,
  695,
  305,
  567,
  368,
  777,
  442,
  668,
  746,
  618,
  86,
  592,
  185,
  328,
  772,
  213,
  644,
  440,
  178,
  243,
  774,
  467,
  991,
  455,
  404,
  919,
  197,
  830,
  568,
  661,
  826,
  841,
  695,
  52,
  982,
  515,
  47,
  47,
  198,
  9,
  272,
  425,
  975,
  472,
  9,
  302,
  338,
  470,
  542,
  247,
  492,
  367,
  180,
  708,
  521,
  592,
  58,
  572,
  887,
  670,
  314,
  191,
  280,
  256,
  845,
  971,
  157,
  725,
  862,
  452,
  76,
  200,
  538,
  44,
  324,
  992,
  459,
  196,
  18,
  64,
  147,
  423,
  187,
  191,
  246,
  305,
  973,
  802,
  832,
  436,
  444,
  242,
  979,
  351,
  733,
  459,
  825,
  833,
  691,
  372,
  861,
  617,
  618,
  190,
  57,
  848,
  527,
  56,
  378,
  533,
  308,
  430,
  473,
  701,
  401,
  871,
  790,
  459,
  216,
  983,
  305,
  61,
  391,
  251,
  447,
  661,
  951,
  150,
  28,
  572,
  206,
  299,
  477,
  703,
  301,
  227,
  960,
  866,
  450,
  335,
  337,
  852,
  906,
  956,
  873,
  893,
  867,
  196,
  131,
  456,
  608,
  688,
  840,
  569,
  91,
  922,
  606,
  961,
  906,
  836,
  168,
  838,
  91,
  607,
  186,
  754,
  708,
  477,
  248,
  138,
  211,
  458,
  17,
  509,
  645,
  629,
  816,
  47,
  185,
  661,
  856,
  508,
  984,
  320,
  763,
  297,
  9,
  446,
  970,
  472,
  12,
  386,
  476,
  686,
  940,
  387,
  721,
  546,
  206,
  110,
  349,
  88,
  781,
  150,
  308,
  136,
  809,
  670,
  291,
  767,
  889,
  926,
  999,
  832,
  462,
  706,
  13,
  9,
  753,
  458,
  309,
  984,
  404,
  801,
  366,
  56,
  611,
  38,
  691,
  174,
  670,
  306,
  229,
  12,
  151,
  697,
  415,
  180,
  655,
  418,
  975,
  781,
  40,
  448,
  625,
  775,
  722,
  350,
  163,
  397,
  634,
  102,
  961,
  322,
  354,
  836,
  652,
  877,
  997,
  397,
  957,
  640,
  70,
  467,
  976,
  901,
  792,
  173,
  869,
  248,
  829,
  919,
  89,
  324,
  9,
  639,
  560,
  744,
  890,
  846,
  452,
  197,
  558,
  756,
  988,
  771,
  573,
  494,
  64,
  423,
  348,
  296,
  587,
  327,
  909,
  371,
  24,
  369,
  174,
  132,
  197,
  412,
  142,
  257,
  790,
  770,
  171,
  875,
  724,
  608,
  329,
  256,
  626,
  868,
  22,
  311,
  499,
  933,
  173,
  78,
  631,
  931,
  191,
  132,
  970,
  194,
  778,
  33,
  832,
  75,
  76,
  63,
  271,
  905,
  164,
  970,
  716,
  216,
  828,
  56,
  131,
  898,
  565,
  791,
  47,
  634,
  205,
  118,
  280,
  605,
  896,
  433,
  38,
  39,
  303,
  242,
  746,
  673,
  541,
  759,
  588,
  990,
  586,
  244,
  152,
  586,
  371,
  666,
  361,
  691,
  815,
  658,
  537,
  371,
  482,
  656,
  117,
  316,
  327,
  368,
  657,
  848,
  557,
  761,
  221,
  147,
  673,
  945,
  914,
  976,
  579,
  804,
  405,
  182,
  89,
  429,
  133,
  485,
  939,
  586,
  452,
  20,
  292,
  108,
  747,
  188,
  899,
  293,
  125,
  976,
  573,
  162,
  592,
  880,
  241,
  685,
  191,
  539,
  361,
  430,
  84,
  791,
  903,
  475,
  96,
  388,
  485,
  416,
  583,
  944,
  939,
  987,
  939,
  545,
  474,
  272,
  494,
  664,
  543,
  480,
  812,
  212,
  400,
  728,
  28,
  379,
  410,
  127,
  607,
  59,
  614,
  883,
  509,
  695,
  765,
  533,
  665,
  754,
  848,
  268,
  159,
  678,
  807,
  325,
  125,
  92,
  208,
  216,
  337,
  697,
  778,
  466,
  861,
  22,
  950,
  74,
  804,
  925,
  617,
  159,
  73,
  676,
  712,
  558,
  487,
  711,
  774,
  383,
  817,
  737,
  555,
  811,
  304,
  743,
  27,
  67,
  535,
  426,
  766,
  615,
  102,
  437,
  765,
  291,
  718,
  641,
  951,
  255,
  375,
  442,
  204,
  108,
  455,
  592,
  364,
  457,
  758,
  486,
  593,
  780,
  277,
  789,
  323,
  404,
  473,
  258,
  953,
  318,
  898,
  555,
  390,
  727,
  510,
  783,
  427,
  806,
  92,
  33,
  474,
  858,
  851,
  783,
  12,
  752,
  356,
  942,
  307,
  235,
  397,
  915,
  502,
  939
];
var target = 28;
// 我自己的 O(n^2)
// function twoSum(nums, target) {
//   let numsc = nums;
//   for (let i = nums.length - 1; i > -1; i--) {
//     for (let k = 0; k < numsc.length; k++) {
//       if (nums[i] + numsc[k] === target && i !== k) {
//         return [k, i];
//       }
//     }
//   }
// }
// 别人的 O(n)
// var twoSum = function(nums, target) {
//   const map = {};
//   const len = nums.length;
//   for (let i = 0; i < len; i++) {
//     const targetNum = target - nums[i];
//     if (targetNum in map) return [map[targetNum], i];
//     map[nums[i]] = i;
//   }
// };

// console.log(twoSum(nums, target));
/**
 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/add-two-numbers
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

class ListNode {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}
import List from "./LinkedList"

let l1 = new List();
let l2 = new List();

[3, 5, 3].forEach((e, i) => {
  l1.append(e)
});
[2, 7, 3].forEach((e, i) => {
  l2.append(e)
});
/**
 *
 * @param {*} l1
 * @param {*} l2
 */
var addTwoNumbers = function (l1, l2) {
  let result;
  let cache = [];
  let flag = 0;

  while (l1 || l2) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + flag;

    if (sum > 9) {
      sum -= 10;
      flag = 1;
    } else {
      flag = 0;
    }

    let list = new ListNode(sum);
    if (cache[0]) {
      cache[0].next = list;
      cache[0] = list;
    } else {
      cache[0] = result = list;
    }

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  if (flag === 1) {
    cache[0].next = new ListNode(1);
  }
  return result;
};

// 测试函数
// (function test() {
//   // 构建第一个节点
//   let l1 = new ListNode(2)
//   let l1x = new ListNode(4)
//   let l1y = new ListNode(3)
//   l1.next = l1x
//   l1x.next = l1y
//   console.log(l1.next.next.val)
//   // 构建第二个节点
//   let l2 = new ListNode(5)
//   let l2x = new ListNode(6)
//   let l2y = new ListNode(4)
//   l2.next = l2x
//   l2x.next = l2y
//   console.log(l2.next.next.val)
//   // addTwoNumbers(l1, l2)
//   console.log(addTwoNumbers(l1y, l2y));
//
// })()

// console.log(addTwoNumbers(l1, l2));
var numbers = [0,1,2,3,4,5,6,7,8,9];
var numbers2 = [1, 2];
// console.log(aEntries.next())
// console.log(aEntries.next().value)
// let every = numbers2.every(el => el % 2 === 0);
// console.log(every);
// let some = numbers2.some(el => el % 2 === 0);
// console.log(some);
// let map = numbers.map(el => el % 2 === 0);
// console.log(map);
// let filter = numbers.filter(el => el % 2 === 0);
// console.log(filter);
// numbers.reduce((previousValue, currentValue, index) => {
//   console.log(previousValue, currentValue, index);
//   return currentValue
// })

// for (let n of numbers) {
//   console.log(n);
//   console.log((n % 2 == 0) ? 'even' : 'odd');
// }

let aEntries = nums.entries(); // 得到索引 和value
// console.log(aEntries.next());
// let aKey = nums.keys();
// console.log(aKey.next());
let copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(1, 3, 5);
console.log(copyArray);
