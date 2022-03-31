/*
 * 將要隨機派發的網址放入下方（不需排序）
 *
 * 並請注意：
 * 1. 除最後一項外，其餘項目用逗號分隔
 * 2. 網址請用引號包起來
 */


const urls = [
	'https://docs.google.com/forms/d/e/1FAIpQLSdK1VDQv_BNpsi8AVGreTHe49OlaaP9FEJapqx8AbAHdy6ejA/viewform?fbclid=IwAR1qAWpLEWflOGTFut0WNj95gdeyBTSw9ddV8SmbIt-lKWpDLimujVPbPaQ',
	'https://docs.google.com/forms/d/e/1FAIpQLSexZkXXnYZyUvs1CbOJ6IpyTIwl_aCMpG3Tujjn4SNsiMq3pA/viewform?fbclid=IwAR0cDt-3Q3oCzqrcSy0dZbEq1rC-3snhcEs8EGvY4Lnj_OCMpgtqUnnphrM',
	'https://docs.google.com/forms/d/e/1FAIpQLScUPkD7q6NxvWSCU2vVzFmf4JVjjTZlRPf_p7p_7UdG0wAzcw/viewform?fbclid=IwAR2DpTuT3ACmLC6cRTcQyehnS1Z61QFrgjcxH6i2ZVfjd-bwbHvsN1oDIXQ',
	'https://docs.google.com/forms/d/e/1FAIpQLSeEFiS8dw8ZuZwy5qwLojAiEypR56WSvjROyIXYInTv85oMmg/viewform?fbclid=IwAR3V91-peajUPr7pnXb1EvauUwEQkE5xQPS0as2HE-6w8k5TMyCFnoPztHE',
	'https://docs.google.com/forms/d/e/1FAIpQLSdjtwaa5pHa5EYYZ1QepzuRshyIvdg0CDZoOVc68FGFoENzbA/viewform?fbclid=IwAR2ASiaVJXWSnrpRdiv3L6-kNnryZkt7TPagdLc_7_iNwJr8JJhb73Fw6Vo',
	'https://docs.google.com/forms/d/e/1FAIpQLSdZj4P8mj_p7JxM43Que5CGJTPUv97_hAMOisRLyiJqcjDmpQ/viewform?fbclid=IwAR1UhXuILxC0dz2GIDKvQYCdDDr6yZWEn_cVvCwiUjOa0ujTtVIljBlUwAg',
	'https://docs.google.com/forms/d/e/1FAIpQLScYJW1QAWE9hKaZB6eiHrfU131NRBosAHLc9FQPrUoWBDMmgA/viewform?fbclid=IwAR1g0mjDt6hBYo-L0LYV707wjLHmn0cSyWjrjz_5PjmEr2ZXEHIvVa4C_zk',
	'https://docs.google.com/forms/d/e/1FAIpQLSeSDe5CIxPn78WT4vSR_aTD1LTrAnauKkzHfRMV0lcAGd89TQ/viewform?fbclid=IwAR1oFcvWgQggQgnEZcOR-aItHzBuL0qqWx0EKdTtMa8qdsUXghZKsr2CqPk',
	'https://docs.google.com/forms/d/e/1FAIpQLSephL2JAzW9z36wCJa03NP8T19GyD8800MrR7xd2KwW8jkyDw/viewform?fbclid=IwAR1UhXuILxC0dz2GIDKvQYCdDDr6yZWEn_cVvCwiUjOa0ujTtVIljBlUwAg',
	'https://docs.google.com/forms/d/e/1FAIpQLSdTSHGnEbBfp6oT0DKGmwiugsciiBrPfxYeYoAWI6YGilQfTw/viewform?fbclid=IwAR3P4_DYQntfizqRSbTV1jvGk5jgNZlcR37K8da0dYaUu2Drj3THv1qgfY4',	
	'https://docs.google.com/forms/d/e/1FAIpQLSeYFF8qXig_I_2oLUuo3ze8nYDcgk6pPel5N6UdBE1u8dLuIw/viewform?fbclid=IwAR1g0mjDt6hBYo-L0LYV707wjLHmn0cSyWjrjz_5PjmEr2ZXEHIvVa4C_zk',
	'https://docs.google.com/forms/d/e/1FAIpQLScakbCr6kBtlLfNaXZzF2WGHiozwMewj3fjySnwYVY1FLnIag/viewform?fbclid=IwAR2eP2YaEDIM-UUWNmWSy2T2SVD5rZ8WbtI8v3oddcP4t9lu-7yHSHF-1jU',
	'https://docs.google.com/forms/d/e/1FAIpQLSfosTQhwjTm8p6U2npDRbijUlwAYzu82SMcA1Hy4Z3Y3-AUBA/viewform?fbclid=IwAR3H_Wk83D0UUmi_4Q1uKXtykIiQTbTScSSrN6bcmZjgxXa1nmB70zBCAM8',
	'https://docs.google.com/forms/d/e/1FAIpQLSekmILPQuIa8RFOa6T02LY4zKndI7p4dwxeWZtl8FWRNPMFYA/viewform?fbclid=IwAR1g0mjDt6hBYo-L0LYV707wjLHmn0cSyWjrjz_5PjmEr2ZXEHIvVa4C_zk',	
	'https://docs.google.com/forms/d/e/1FAIpQLSdolnLG3eBDR34jBpu-qV0bjkLH_X57Gtm6xkl5XI8cv1oHVQ/viewform?fbclid=IwAR23Z_Nh76h90Xwtd4i9Htl8dyobgonxK7PPz4j0OgfJ-TMkgd4l-PmAqfg'
];
