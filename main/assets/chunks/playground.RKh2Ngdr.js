typeof Math.imul>"u"&&(Math.imul=function(r,e){return(r&4294901760)*(e&65535)+(r&65535)*(e|0)|0});typeof ArrayBuffer.isView>"u"&&(ArrayBuffer.isView=function(n){return n!=null&&n.__proto__!=null&&n.__proto__.__proto__===Int8Array.prototype.__proto__});typeof Array.prototype.fill>"u"&&Object.defineProperty(Array.prototype,"fill",{value:function(n){if(this==null)throw new TypeError("this is null or not defined");for(var r=Object(this),e=r.length>>>0,t=arguments[1],i=t>>0,a=i<0?Math.max(e+i,0):Math.min(i,e),s=arguments[2],o=s===void 0?e:s>>0,u=o<0?Math.max(e+o,0):Math.min(o,e);a<u;)r[a]=n,a++;return r}});[Int8Array,Int16Array,Uint16Array,Int32Array,Float32Array,Float64Array].forEach(function(n){typeof n.prototype.fill>"u"&&Object.defineProperty(n.prototype,"fill",{value:Array.prototype.fill})});typeof Math.clz32>"u"&&(Math.clz32=function(n,r){return function(e){var t=e>>>0;return t===0?32:31-(n(t)/r|0)|0}}(Math.log,Math.LN2));typeof String.prototype.endsWith>"u"&&Object.defineProperty(String.prototype,"endsWith",{value:function(n,r){var e=this.toString();(r===void 0||r>e.length)&&(r=e.length),r-=n.length;var t=e.indexOf(n,r);return t!==-1&&t===r}});typeof String.prototype.startsWith>"u"&&Object.defineProperty(String.prototype,"startsWith",{value:function(n,r){return r=r||0,this.lastIndexOf(n,r)===r}});var lr=Math.imul,Du=ArrayBuffer.isView,cs=Math.clz32;class Sc{}class Ce{}class rd{}class nd{constructor(r){this.w_1=r}x(){return Fp(this.w_1)}}class ed{constructor(r){this.o1_1=r}x(){return this.o1_1.x()}}class td{constructor(r){this.w1_1=r}x(){return this.w1_1.x()}}let id=class{constructor(){Hu=this,this.y1_1=0,this.z1_1=65535,this.a2_1=55296,this.b2_1=56319,this.c2_1=56320,this.d2_1=57343,this.e2_1=55296,this.f2_1=57343,this.g2_1=2,this.h2_1=16}};class Sn{constructor(r){Fc(),this.x1_1=r}i2(r){return gn(this.x1_1,r)}d(r){return Jb(this,r)}toString(){return yr(this.x1_1)}equals(r){return Hb(this.x1_1,r)}hashCode(){return Gb(this.x1_1)}}class W{}class Oe{}class En{}class Xe{}class mn{}class ca{}let Mw=class{};class ae{constructor(r,e){this.w2_1=r,this.x2_1=e}y2(r){return je(this.x2_1,r.x2_1)}d(r){return this.y2(r instanceof ae?r:g())}equals(r){return this===r}hashCode(){return sk(this)}toString(){return this.w2_1}}let ad=class{constructor(){Gu=this,this.z2_1=new y(0,-2147483648),this.a3_1=new y(-1,2147483647),this.b3_1=8,this.c3_1=64}};class y extends rd{constructor(r,e){Il(),super(),this.d3_1=r,this.e3_1=e}f3(r){return tr(this,r)}d(r){return this.f3(r instanceof y?r:g())}toString(){return bo(this,10)}equals(r){var e;return r instanceof y?e=ir(this,r):e=!1,e}hashCode(){return Xb(this)}valueOf(){return Zn(this)}}class bn{}class sd{constructor(r){this.i3_1=r,this.h3_1=0}y(){return this.h3_1!==this.i3_1.length}z(){var r;if(this.h3_1!==this.i3_1.length){var e=this.h3_1;this.h3_1=e+1|0,r=this.i3_1[e]}else throw Or.r(""+this.h3_1);return r}}class Rw{constructor(){this.MIN_VALUE=-128,this.MAX_VALUE=127,this.SIZE_BYTES=1,this.SIZE_BITS=8}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Bw{constructor(){this.MIN_VALUE=-32768,this.MAX_VALUE=32767,this.SIZE_BYTES=2,this.SIZE_BITS=16}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Fw{constructor(){this.MIN_VALUE=-2147483648,this.MAX_VALUE=2147483647,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class $w{constructor(){this.MIN_VALUE=14e-46,this.MAX_VALUE=34028235e31,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Jw{constructor(){this.MIN_VALUE=5e-324,this.MAX_VALUE=17976931348623157e292,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=8,this.SIZE_BITS=64}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Hw{}class Gw{}class od{constructor(){t1=this;var r=this;r.j4_1=new Int32Array([48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296])}}class dn{}class wl{toString(){return"kotlin.Unit"}}class ya{static x4(r){return Ii(this,r)}l1(r){var e;r:{var t;if(E(this,W)?t=this.i1():t=!1,t){e=!1;break r}for(var i=this.x();i.y();){var a=i.z();if(P(a,r)){e=!0;break r}}e=!1}return e}j2(r){var e;r:{var t;if(E(r,W)?t=r.i1():t=!1,t){e=!0;break r}for(var i=r.x();i.y();){var a=i.z();if(!this.l1(a)){e=!1;break r}}e=!0}return e}i1(){return this.c1()===0}toString(){return V(this,", ","[","]",l,l,i2(this))}toArray(){return g_(this)}}class Ss extends ya{static w4(){return this.x4()}h1(r){this.y4();for(var e=!1,t=r.x();t.y();){var i=t.z();this.n(i)&&(e=!0)}return e}v2(){this.y4();for(var r=this.x();r.y();)r.z(),r.z4()}toJSON(){return this.toArray()}y4(){}}class Ec{constructor(r,e){Gc(this,e),this.c5_1=r,this.a5_1=0,this.b5_1=-1}y(){return this.a5_1<this.c5_1.c1()}z(){if(!this.y())throw Or.j1();var r=this,e=this.a5_1;return this.a5_1=e+1|0,r.b5_1=e,this.c5_1.d1(this.b5_1)}z4(){if(this.b5_1===-1){var r="Call next() or previous() before removing element from the iterator.";throw xr.o3(b(r))}this.c5_1.e5(this.b5_1),this.a5_1=this.b5_1,this.b5_1=-1}}class ld extends Ec{constructor(r,e,t){t===l&&(t={}),t.i5_1=r,super(r,t),Nn.j5(e,this.i5_1.c1()),this.a5_1=e}}class ud extends Ss{static k5(){var r=this.w4();return r.d5_1=0,r}n(r){return this.y4(),this.l5(this.c1(),r),!0}v2(){this.y4(),this.m5(0,this.c1())}x(){return new Ec(this)}l1(r){return this.n1(r)>=0}n1(r){var e;r:{for(var t=0,i=this.x();i.y();){var a=i.z();if(P(a,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new ld(this,r)}m5(r,e){var t=this.m1(r),i=e-r|0,a=0;if(a<i)do a=a+1|0,t.z(),t.z4();while(a<i)}equals(r){return r===this?!0:r!=null&&E(r,En)?Nn.n5(this,r):!1}hashCode(){return Nn.o5(this)}}class cd{static w5(){var r=Ii(this);return r.u5_1=null,r.v5_1=null,r}m2(r){return rh(this,r)!=null}n2(r){var e=this.r2(),t;r:{var i;if(E(e,W)?i=e.i1():i=!1,i){t=!1;break r}for(var a=e.x();a.y();){var s=a.z();if(P(s.l2(),r)){t=!0;break r}}t=!1}return t}d6(r){if(!(r!=null&&E(r,Xe)))return!1;var e=r.k2(),t=r.l2(),i=(E(this,mn)?this:g()).o2(e);if(!P(t,i))return!1;var a;return i==null?a=!(E(this,mn)?this:g()).m2(e):a=!1,!a}equals(r){if(r===this)return!0;if(!(r!=null&&E(r,mn))||this.c1()!==r.c1())return!1;var e=r.r2(),t;r:{var i;if(E(e,W)?i=e.i1():i=!1,i){t=!0;break r}for(var a=e.x();a.y();){var s=a.z();if(!this.d6(s)){t=!1;break r}}t=!0}return t}o2(r){var e=rh(this,r);return e==null?null:e.l2()}hashCode(){return Sr(this.r2())}i1(){return this.c1()===0}c1(){return this.r2().c1()}p2(){if(this.u5_1==null){var r=this;r.u5_1=Md.pg(this)}return un(this.u5_1)}toString(){var r=this.r2();return V(r,", ","{","}",l,l,s2(this))}q2(){if(this.v5_1==null){var r=this;r.v5_1=Rd.sg(this)}return un(this.v5_1)}}class fd extends cd{static t5(){var r=this.w5();return r.r5_1=null,r.s5_1=null,r}x5(){return md.z5(this)}a6(){return wd.c6(this)}p2(){var r=this.r5_1,e;if(r==null){var t=this.x5();this.r5_1=t,e=t}else e=r;return e}q2(){var r=this.s5_1,e;if(r==null){var t=this.a6();this.s5_1=t,e=t}else e=r;return e}v2(){this.r2().v2()}t2(r){this.y4();for(var e=this.r2().x();e.y();){var t=e.z(),i=t.k2();if(P(r,i)){var a=t.l2();return e.z4(),a}}return null}y4(){}}class Es extends Ss{static e6(){return this.w4()}equals(r){return r===this?!0:r!=null&&E(r,Oe)?gs.f6(this,r):!1}hashCode(){return gs.g6(this)}}let vd=class{constructor(){i1=this;var r=this,e=T.g1(0);e.l_1=!0,r.h6_1=e}};class zs{}class T extends ud{constructor(r){return new.target.i4(r)}static i4(r){Wa();var e=this.k5();return e.k_1=r,e.l_1=!1,e}static m(){Wa();var r=[];return this.i4(r)}static g1(r){Wa();var e=[],t=this.i4(e);if(!(r>=0)){var i="Negative initial capacity: "+r;throw U.v(b(i))}return t}static f1(r){Wa();var e=xi(r);return this.i4(e)}j6(){return this.y4(),this.l_1=!0,this.c1()>0?this:Wa().h6_1}k6(r){}c1(){return this.k_1.length}d1(r){return this.k_1[ku(this,r)]}v4(r,e){this.y4(),ku(this,r);var t=this.k_1[r];return this.k_1[r]=e,t}n(r){return this.y4(),this.k_1.push(r),this.d5_1=this.d5_1+1|0,!0}l5(r,e){this.y4(),this.k_1.splice(Jk(this,r),0,e),this.d5_1=this.d5_1+1|0}h1(r){if(this.y4(),r.i1())return!1;for(var e=$k(this,r.c1()),t=0,i=r.x();i.y();){var a=i.z(),s=t;t=s+1|0;var o=Us(s);this.k_1[e+o|0]=a}return this.d5_1=this.d5_1+1|0,!0}e5(r){this.y4(),ku(this,r),this.d5_1=this.d5_1+1|0;var e;return r===Ns(this)?e=this.k_1.pop():e=this.k_1.splice(r,1)[0],e}m5(r,e){this.y4(),this.d5_1=this.d5_1+1|0,this.k_1.splice(r,e-r|0)}v2(){this.y4();var r=this;r.k_1=[],this.d5_1=this.d5_1+1|0}n1(r){return nb(this.k_1,r)}toString(){return tk(this.k_1)}l6(){return[].slice.call(this.k_1)}toArray(){return this.l6()}y4(){if(this.l_1)throw le.p6()}}class fs extends fd{static w6(r){var e=this.t5();return Yk(e),e.u6_1=r,e}static x6(){return this.w6(Qe.i7())}static j7(r,e){return this.w6(Qe.k7(r,e))}static l7(r){return this.j7(r,1)}static m7(r){return this.w6(Qe.n7(r))}v2(){this.u6_1.v2()}m2(r){return this.u6_1.o7(r)}n2(r){return this.u6_1.n2(r)}x5(){return hd.q7(this.u6_1)}a6(){return dd.s7(this.u6_1)}r2(){var r=this.v6_1,e;if(r==null){var t=_d.u7(this.u6_1);this.v6_1=t,e=t}else e=r;return e}o2(r){return this.u6_1.o2(r)}s2(r,e){return this.u6_1.s2(r,e)}t2(r){return this.u6_1.t2(r)}c1(){return this.u6_1.c1()}u2(r){return this.u6_1.u2(r)}}class hd extends Es{constructor(r){return new.target.q7(r)}static q7(r){var e=this.e6();return e.p7_1=r,e}c1(){return this.p7_1.c1()}i1(){return this.p7_1.c1()===0}l1(r){return this.p7_1.o7(r)}v2(){return this.p7_1.v2()}n(r){throw le.p6()}h1(r){throw le.p6()}x(){return this.p7_1.v7()}y4(){return this.p7_1.w7()}}class dd extends Ss{constructor(r){return new.target.s7(r)}static s7(r){var e=this.w4();return e.r7_1=r,e}c1(){return this.r7_1.c1()}i1(){return this.r7_1.c1()===0}x7(r){return this.r7_1.n2(r)}l1(r){return this.x7(r)}y7(r){throw le.p6()}n(r){return this.y7(r)}z7(r){throw le.p6()}h1(r){return this.z7(r)}x(){return this.r7_1.a8()}y4(){return this.r7_1.w7()}}class pd extends Es{static c8(r){var e=this.e6();return e.b8_1=r,e}c1(){return this.b8_1.c1()}i1(){return this.b8_1.c1()===0}e8(r){return this.b8_1.g8(r)}l1(r){return r!=null&&E(r,Xe)?this.e8(r!=null&&E(r,Xe)?r:g()):!1}v2(){return this.b8_1.v2()}f8(r){throw le.p6()}n(r){return this.f8(r!=null&&E(r,Xe)?r:g())}h1(r){throw le.p6()}j2(r){return this.b8_1.h8(r)}y4(){return this.b8_1.w7()}}class _d extends pd{constructor(r){return new.target.u7(r)}static u7(r){return this.c8(r)}x(){return this.b8_1.d8()}}class gd{constructor(r){this.i8_1=r}y(){return this.i8_1.y()}z(){return this.i8_1.z().k2()}z4(){return this.i8_1.z4()}}class md extends Es{constructor(r){return new.target.z5(r)}static z5(r){var e=this.e6();return e.y5_1=r,e}j8(r){throw le.k8("Add is not supported on keys")}n(r){return this.j8(r)}v2(){return this.y5_1.v2()}o7(r){return this.y5_1.m2(r)}l1(r){return this.o7(r)}x(){var r=this.y5_1.r2().x();return new gd(r)}c1(){return this.y5_1.c1()}y4(){return this.y5_1.y4()}}class yd{constructor(r){this.l8_1=r}y(){return this.l8_1.y()}z(){return this.l8_1.z().l2()}z4(){return this.l8_1.z4()}}class wd extends Ss{constructor(r){return new.target.c6(r)}static c6(r){var e=this.w4();return e.b6_1=r,e}y7(r){throw le.k8("Add is not supported on values")}n(r){return this.y7(r)}x7(r){return this.b6_1.n2(r)}l1(r){return this.x7(r)}x(){var r=this.b6_1.r2().x();return new yd(r)}c1(){return this.b6_1.c1()}y4(){return this.b6_1.y4()}}class gi extends Es{static m8(r){var e=this.e6();return e.a1_1=r,e}static n8(){return this.m8(Qe.i7())}static o8(r){for(var e=this.m8(Qe.p8(r.c1())),t=r.x();t.y();){var i=t.z();e.a1_1.s2(i,!0)}return e}static q8(r,e){return this.m8(Qe.k7(r,e))}static b1(r){return this.q8(r,1)}n(r){return this.a1_1.s2(r,!0)==null}v2(){this.a1_1.v2()}l1(r){return this.a1_1.o7(r)}i1(){return this.a1_1.c1()===0}x(){return this.a1_1.v7()}c1(){return this.a1_1.c1()}}class bd{constructor(){this.c9_1=-1640531527,this.d9_1=8,this.e9_1=2,this.f9_1=-1}}class bl{constructor(r){this.g9_1=r,this.h9_1=0,this.i9_1=-1,this.j9_1=this.g9_1.f7_1,this.k9()}k9(){for(;this.h9_1<this.g9_1.d7_1&&this.g9_1.a7_1[this.h9_1]<0;)this.h9_1=this.h9_1+1|0}y(){return this.h9_1<this.g9_1.d7_1}z4(){if(this.l9(),this.i9_1===-1){var r="Call next() before removing element from the iterator.";throw xr.o3(b(r))}this.g9_1.w7(),T_(this.g9_1,this.i9_1),this.i9_1=-1,this.j9_1=this.g9_1.f7_1}l9(){if(this.g9_1.f7_1!==this.j9_1)throw go.m9()}}class kd extends bl{z(){if(this.l9(),this.h9_1>=this.g9_1.d7_1)throw Or.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=this.g9_1.y6_1[this.i9_1];return this.k9(),t}}class xd extends bl{z(){if(this.l9(),this.h9_1>=this.g9_1.d7_1)throw Or.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=un(this.g9_1.z6_1)[this.i9_1];return this.k9(),t}}class Sd extends bl{z(){if(this.l9(),this.h9_1>=this.g9_1.d7_1)throw Or.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=new Ed(this.g9_1,this.i9_1);return this.k9(),t}z9(){if(this.h9_1>=this.g9_1.d7_1)throw Or.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=this.g9_1.y6_1[this.i9_1],i=t==null?null:Sr(t),a=i??0,s=un(this.g9_1.z6_1)[this.i9_1],o=s==null?null:Sr(s),u=a^(o??0);return this.k9(),u}aa(r){if(this.h9_1>=this.g9_1.d7_1)throw Or.j1();var e=this,t=this.h9_1;this.h9_1=t+1|0,e.i9_1=t;var i=this.g9_1.y6_1[this.i9_1];P(i,this.g9_1)?r.ca("(this Map)"):r.ba(i),r.da(61);var a=un(this.g9_1.z6_1)[this.i9_1];P(a,this.g9_1)?r.ca("(this Map)"):r.ba(a),this.k9()}}class Ed{constructor(r,e){this.v8_1=r,this.w8_1=e,this.x8_1=this.v8_1.f7_1}k2(){return Lv(this),this.v8_1.y6_1[this.w8_1]}l2(){return Lv(this),un(this.v8_1.z6_1)[this.w8_1]}equals(r){var e,t;return r!=null&&E(r,Xe)?t=P(r.k2(),this.k2()):t=!1,t?e=P(r.l2(),this.l2()):e=!1,e}hashCode(){var r=this.k2(),e=r==null?null:Sr(r),t=e??0,i=this.l2(),a=i==null?null:Sr(i);return t^(a??0)}toString(){return ue(this.k2())+"="+ue(this.l2())}}class zd{}function Kw(n){var r;r:{var e;if(E(n,W)?e=n.i1():e=!1,e){r=!0;break r}for(var t=n.x();t.y();){var i=t.z(),a=i,s;if(a!=null&&E(a,Xe)?s=this.ga(a):s=!1,!s){r=!1;break r}}r=!0}return r}class Qe{constructor(r,e,t,i,a,s){return new.target.ea(r,e,t,i,a,s)}static ea(r,e,t,i,a,s){var o=Ii(this);return o.y6_1=r,o.z6_1=e,o.a7_1=t,o.b7_1=i,o.c7_1=a,o.d7_1=s,o.e7_1=S_(_s,nt(o)),o.f7_1=0,o.g7_1=0,o.h7_1=!1,o}c1(){return this.g7_1}static i7(){return this.p8(8)}static p8(r){return this.ea(y_(r),null,new Int32Array(r),new Int32Array(x_(_s,r)),2,0)}static n7(r){var e=this.p8(r.c1());return e.u2(r),e}static k7(r,e){var t=this.p8(r);if(!(e>0)){var i="Non-positive load factor: "+e;throw U.v(b(i))}return t}n2(r){return Qk(this,r)>=0}o2(r){var e=to(this,r);return e<0?null:un(this.z6_1)[e]}o7(r){return to(this,r)>=0}s2(r,e){var t=A_(this,r),i=z_(this);if(t<0){var a=i[(-t|0)-1|0];return i[(-t|0)-1|0]=e,a}else return i[t]=e,null}u2(r){this.w7(),tx(this,r.r2())}t2(r){this.w7();var e=to(this,r);if(e<0)return null;var t=un(this.z6_1)[e];return T_(this,e),t}v2(){this.w7();var r=0,e=this.d7_1-1|0;if(r<=e)do{var t=r;r=r+1|0;var i=this.a7_1[t];i>=0&&(this.b7_1[i]=0,this.a7_1[t]=-1)}while(t!==e);So(this.y6_1,0,this.d7_1);var a=this.z6_1;a==null||So(a,0,this.d7_1),this.g7_1=0,this.d7_1=0,Al(this)}equals(r){var e;if(r===this)e=!0;else{var t;r!=null&&E(r,mn)?t=nx(this,r):t=!1,e=t}return e}hashCode(){for(var r=0,e=this.d8();e.y();)r=r+e.z9()|0;return r}toString(){var r=rn.fa(2+lr(this.g7_1,3)|0);r.ca("{");for(var e=0,t=this.d8();t.y();)e>0&&r.ca(", "),t.aa(r),e=e+1|0;return r.ca("}"),r.toString()}w7(){if(this.h7_1)throw le.p6()}g8(r){var e=to(this,r.k2());return e<0?!1:P(un(this.z6_1)[e],r.l2())}ga(r){return this.g8(E(r,Xe)?r:g())}v7(){return new kd(this)}a8(){return new xd(this)}d8(){return new Sd(this)}}class vr extends fs{static q4(){var r=this.x6();return r}static ha(r){var e=this.l7(r);return e}static ia(r){var e=this.m7(r);return e}y4(){return this.u6_1.w7()}}class Tn extends gi{static e1(){var r=this.n8();return r}static k1(r){var e=this.o8(r);return e}static ja(r,e){var t=this.q8(r,e);return t}static i(r){return this.ja(r,1)}y4(){return this.a1_1.w7()}}class tt{}class Id{ka(){var r="This continuation is already complete";throw xr.o3(b(r))}la(r){var e="This continuation is already complete";throw xr.o3(b(e))}ma(r){return this.la(r)}toString(){return"This continuation is already complete"}}class zc{constructor(){this.ta_1=null}va(){var r=this.ta_1,e;if(r==null){var t=this.ka().wa(v1),i=t==null?null:t.xa(this),a=i??this;this.ta_1=a,e=a}else e=r;return e}ua(){var r=this.ta_1;r!=null&&r!==this&&un(this.ka().wa(v1)).ya(r),this.ta_1=q_}}class Ic extends zc{constructor(r){super(),this.oa_1=r;var e=this;e.pa_1=l;var t=this,i=this.oa_1;t.qa_1=i==null?null:i.ka()}ka(){return un(this.qa_1)}ra(r){var e=ys(),t=jg(r),i=t==null?this.pa_1.next(r):this.pa_1.throw(t),a=i.done,s=i.value;r:for(;!a;){try{s=s()}catch(f){var o=f,u=this.pa_1.throw(o);s=u.value,a=u.done;continue r}if(s===e)break r;var c=this.pa_1.next(s);s=c.value,a=c.done}return s}sa(r,e){return r=r===l?null:r,e===l?this.ra(r):e.ra.call(this,new ai(r))}la(r){var e=null,t;try{t=this.ra(r)}catch(v){var i;if(v instanceof Error){var a=v;e=a,i=null}else throw v;t=i}var s=t;if(s===ys())return or;this.ua();var o=this.oa_1;if(o!=null)if(e!=null){var u=e,c=Ug(u);o.ma(c)}else{var f=s;o.ma(f)}}ma(r){return this.la(r)}}class Cd{constructor(r,e,t){this.eb_1=r,this.fb_1=e,this.gb_1=t}ka(){return this.eb_1}la(r){var e=this.fb_1;MS(r)&&e(r);var t=this.gb_1,i=jg(r);return i==null||t(i),or}ma(r){return this.la(r)}}class vs extends Error{static nb(){var r=ia(this,Error,[null]);return aa(r),Eu(r),r}static k3(r){var e=ia(this,Error,[r]);return aa(e,r),Eu(e),e}static ob(r,e){var t=ia(this,Error,[r,o_(e)]);return aa(t,r,e),Eu(t),t}}class oe extends vs{static hb(){var r=this.nb();return Su(r),r}static a9(r){var e=this.k3(r);return Su(e),e}static mb(r,e){var t=this.ob(r,e);return Su(t),t}}class le extends oe{static p6(){var r=this.hb();return Pv(r),r}static k8(r){var e=this.a9(r);return Pv(e),e}}class U extends oe{static kb(){var r=this.hb();return xu(r),r}static v(r){var e=this.a9(r);return xu(e),e}static lb(r,e){var t=this.mb(r,e);return xu(t),t}}class Or extends oe{static j1(){var r=this.hb();return Mv(r),r}static r(r){var e=this.a9(r);return Mv(e),e}}class Wn extends oe{static sb(){var r=this.hb();return Rv(r),r}static tb(r){var e=this.a9(r);return Rv(e),e}}class xr extends oe{static ub(){var r=this.hb();return Bv(r),r}static o3(r){var e=this.a9(r);return Bv(e),e}}class go extends oe{static m9(){var r=this.hb();return Fv(r),r}static u8(r){var e=this.a9(r);return Fv(e),e}}class Lu extends oe{static yb(){var r=this.hb();return $v(r),r}static zb(r){var e=this.a9(r);return $v(e),e}}class mo extends Error{static ec(){var r=ia(this,Error,[null]);return aa(r),zu(r),r}static hc(r){var e=ia(this,Error,[r]);return aa(e,r),zu(e),e}static gc(r,e){var t=ia(this,Error,[r,o_(e)]);return aa(t,r,e),zu(t),t}}class ns extends mo{static cc(){var r=this.ec();return Jv(r),r}static fc(r){var e=r==null?null:b(r),t=this.gc(e,r instanceof Error?r:null);return Jv(t),t}}class Pu extends U{static mc(){var r=this.kb();return Hv(r),r}static nc(r){var e=this.v(r);return Hv(e),e}}class Mu extends oe{static s3(){var r=this.hb();return ux(r),r}}class Ru extends oe{static w3(){var r=this.hb();return cx(r),r}}class Bu extends oe{static a4(){var r=this.hb();return fx(r),r}}class Ke{}class wa{equals(r){var e;return r instanceof Cc?e=!1:r instanceof wa?e=P(this.tc(),r.tc())&&this.oc()==r.oc():e=!1,e}hashCode(){var r=this.oc(),e=r==null?null:se(r);return e??0}toString(){return"class "+this.oc()}}class en extends wa{constructor(r,e,t){super(),this.qc_1=r,this.rc_1=e,this.sc_1=t}tc(){return this.qc_1}oc(){return this.rc_1}pc(r){return this.sc_1(r)}}class Cc extends wa{constructor(){Eo=null,super(),Eo=this,this.uc_1="Nothing"}oc(){return this.uc_1}pc(r){return!1}tc(){throw le.k8("There's no native JS class for Nothing type")}equals(r){return r===this}hashCode(){return 0}}class Fu extends wa{constructor(r){super(),this.vc_1=r;var e=this,t=this.vc_1.$metadata$;e.wc_1=t==null?null:t.simpleName}tc(){return this.vc_1}oc(){return this.wc_1}pc(r){return Sk(r,this.vc_1)}}class Si{}class Ad{constructor(){s1=this;var r=this,e=Object;r.anyClass=new en(e,"Any",gx);var t=this,i=Number;t.numberClass=new en(i,"Number",mx),this.nothingClass=_x();var a=this,s=Boolean;a.booleanClass=new en(s,"Boolean",yx);var o=this,u=Number;o.byteClass=new en(u,"Byte",wx);var c=this,f=Number;c.shortClass=new en(f,"Short",bx);var v=this,h=Number;v.intClass=new en(h,"Int",kx);var d=this,_=y;d.longClass=new en(_,"Long",xx);var m=this,w=Number;m.floatClass=new en(w,"Float",Sx);var x=this,k=Number;x.doubleClass=new en(k,"Double",Ex);var S=this,z=Array;S.arrayClass=new en(z,"Array",zx);var I=this,A=String;I.stringClass=new en(A,"String",Ix);var q=this,N=Error;q.throwableClass=new en(N,"Throwable",Cx);var $=this,O=Array;$.booleanArrayClass=new en(O,"BooleanArray",Ax);var L=this,H=Uint16Array;L.charArrayClass=new en(H,"CharArray",Tx);var B=this,F=Int8Array;B.byteArrayClass=new en(F,"ByteArray",qx);var R=this,X=Int16Array;R.shortArrayClass=new en(X,"ShortArray",Ox);var J=this,er=Int32Array;J.intArrayClass=new en(er,"IntArray",jx);var Y=this,G=typeof BigInt>"u"?l:BigInt;Y.bigIntClass=new en(G,"BigInt",Ux);var sr=this,ur=Array;sr.longArrayClass=new en(ur,"LongArray",Nx);var Q=this,Er=Float32Array;Q.floatArrayClass=new en(Er,"FloatArray",Dx);var zr=this,mr=Float64Array;zr.doubleArrayClass=new en(mr,"DoubleArray",Lx)}xc(){return this.anyClass}yc(){return this.numberClass}zc(){return this.nothingClass}ad(){return this.booleanClass}bd(){return this.byteClass}cd(){return this.shortClass}dd(){return this.intClass}ed(){return this.longClass}fd(){return this.floatClass}gd(){return this.doubleClass}hd(){return this.arrayClass}id(){return this.stringClass}jd(){return this.throwableClass}kd(){return this.booleanArrayClass}ld(){return this.charArrayClass}md(){return this.byteArrayClass}nd(){return this.shortArrayClass}od(){return this.intArrayClass}pd(){return this.bigIntClass}qd(){return this.longArrayClass}rd(){return this.floatArrayClass}sd(){return this.doubleArrayClass}functionClass(r){var e=Gv()[r],t;if(e==null){var i=Function,a="Function"+r,s=new en(i,a,Px(r));Gv()[r]=s,t=s}else t=e;return t}}class mv extends vs{constructor(r){return new.target.vd(r)}static vd(r){var e=this.k3(r);return cn(e,e.ud_1),e}static wd(){return this.vd(null)}}class rn{constructor(r){return new.target.xd(r)}static xd(r){var e=Ii(this);return e.e_1=r,e}static fa(r){return this.f()}static f(){return this.xd("")}a(){return this.e_1.length}b(r){var e=this.e_1,t;if(0<=r&&r<=(C(e)-1|0))t=rr(e,r);else throw Wn.tb("index: "+r+", length: "+this.a()+"}");return t}c(r,e){return ie(this.e_1,r,e)}da(r){return this.e_1=this.e_1+yr(r),this}g(r){return this.e_1=this.e_1+ue(r),this}yd(r,e,t){return this.zd(r??"null",e,t)}ba(r){return this.e_1=this.e_1+ue(r),this}ae(r){return this.ca(r.toString())}be(r){return this.ca(r.toString())}ca(r){var e=this,t=this.e_1;return e.e_1=t+(r??"null"),this}ce(r,e){return Nn.j5(r,this.a()),this.e_1=ie(this.e_1,0,r)+yr(e)+at(this.e_1,r),this}de(r){if(r<0)throw U.v("Negative new length: "+r+".");if(r<=this.a())this.e_1=ie(this.e_1,0,r);else{var e=this.a();if(e<r)do e=e+1|0,this.e_1=this.e_1+yr(0);while(e<r)}}toString(){return this.e_1}ee(){return this.e_1="",this}fe(r){return Nn.i6(r,this.a()),this.e_1=ie(this.e_1,0,r)+at(this.e_1,r+1|0),this}zd(r,e,t){var i=b(r);return Nn.ge(e,t,i.length),this.e_1=this.e_1+ie(i,e,t),this}}class Td{constructor(){o1=this,this.he_1=new RegExp("[\\\\^$*+?.()|[\\]{}]","g"),this.ie_1=new RegExp("[\\\\$]","g"),this.je_1=new RegExp("\\$","g")}ke(r){var e=this.he_1;return r.replace(e,"\\$&")}le(r){var e=this.je_1;return r.replace(e,"$$$$")}}class St{constructor(r,e){return new.target.se(r,e)}static se(r,e){Io();var t=Ii(this);return t.me_1=r,t.ne_1=it(e),t.oe_1=new RegExp(r,Gx(e,"gu")),t.pe_1=null,t.qe_1=null,t}static te(r){return Io(),this.se(r,Ot())}ue(r){Rx(this.oe_1);var e=this.oe_1.exec(b(r));return e!=null&&e.index===0&&this.oe_1.lastIndex===C(r)}re(r,e){if(e<0||e>C(r))throw Wn.tb("Start index out of bounds: "+e+", input length: "+C(r));return D_(this.oe_1,b(r),e,this.oe_1)}ve(r,e,t){return e=e===l?0:e,t===l?this.re(r,e):t.re.call(this,r,e)}we(r,e){if(e<0||e>C(r))throw Wn.tb("Start index out of bounds: "+e+", input length: "+C(r));var t=Jx(this,r,e);return m2(t,Hx)}xe(r,e,t){return e=e===l?0:e,t===l?this.we(r,e):t.we.call(this,r,e)}ye(r,e){var t=this.ve(r);if(t==null)return b(r);var i=0,a=C(r),s=rn.fa(a);do{var o=un(t);s.yd(r,i,o.ze().df()),s.g(e(o)),i=o.ze().ef()+1|0,t=o.z()}while(i<a&&t!=null);return i<a&&s.yd(r,i,a),s.toString()}ff(r,e){uf(e);for(var t=this.xe(r),i=e===0?t:Mb(t,e-1|0),a=T.m(),s=0,o=i.x();o.y();){var u=o.z();a.n(b(Un(r,s,u.ze().df()))),s=u.ze().ef()+1|0}return a.n(b(Un(r,s,C(r)))),a}toString(){return this.oe_1.toString()}}class kl{constructor(r){this.gf_1=r}toString(){return"MatchGroup(value="+this.gf_1+")"}hashCode(){return se(this.gf_1)}equals(r){return this===r?!0:!(!(r instanceof kl)||this.gf_1!==r.gf_1)}}class qd extends ya{constructor(r,e){return new.target.tf(r,e)}static tf(r,e,t){return t===l&&(t={}),t.kf_1=r,t.lf_1=e,this.x4(t)}c1(){return this.kf_1.length}x(){var r=qb(u2(this));return Cs(r,Wx(this)).x()}d1(r){var e=this.kf_1[r],t;return e==null?t=null:t=new kl(e),t}}class Ac extends ya{static wf(r){return this.x4(r)}x(){return new Tc(this)}n1(r){var e;r:{for(var t=0,i=this.x();i.y();){var a=i.z();if(P(a,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new Ud(this,r)}equals(r){return r===this?!0:r!=null&&E(r,En)?Nn.n5(this,r):!1}hashCode(){return Nn.o5(this)}}class Od extends Ac{constructor(r){return new.target.vf(r)}static vf(r,e){return e===l&&(e={}),e.uf_1=r,this.wf(e)}c1(){return this.uf_1.length}d1(r){var e=this.uf_1[r];return e??""}}class jd{constructor(r,e,t,i){this.pf_1=r,this.qf_1=e,this.rf_1=t,this.sf_1=i,this.mf_1=r;var a=this;a.nf_1=qd.tf(e,this),this.of_1=null}ze(){return this.mf_1}xf(){if(this.of_1==null){var r=this;r.of_1=Od.vf(this.qf_1)}return un(this.of_1)}z(){return D_(this.rf_1,this.sf_1,this.pf_1.i1()?Yx(this,this.pf_1.df()):this.pf_1.ef()+1|0,this.rf_1)}}let Ww=class{constructor(r){this.yf_1=r}zf(r,e){return this.yf_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.yf_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}};class mt extends ae{constructor(r,e,t){super(r,e),this.cg_1=t}}class Tc{constructor(r,e){Gc(this,e),this.ig_1=r,this.hg_1=0}y(){return this.hg_1<this.ig_1.c1()}z(){if(!this.y())throw Or.j1();var r=this.hg_1;return this.hg_1=r+1|0,this.ig_1.d1(r)}}class Ud extends Tc{constructor(r,e,t){t===l&&(t={}),t.lg_1=r,super(r,t),Nn.j5(e,this.lg_1.c1()),this.hg_1=e}}class Nd{constructor(){this.t4_1=2147483639}i6(r,e){if(r<0||r>=e)throw Wn.tb("index: "+r+", size: "+e)}j5(r,e){if(r<0||r>e)throw Wn.tb("index: "+r+", size: "+e)}u4(r,e,t){if(r<0||e>t)throw Wn.tb("fromIndex: "+r+", toIndex: "+e+", size: "+t);if(r>e)throw U.v("fromIndex: "+r+" > toIndex: "+e)}ge(r,e,t){if(r<0||e>t)throw Wn.tb("startIndex: "+r+", endIndex: "+e+", size: "+t);if(r>e)throw U.v("startIndex: "+r+" > endIndex: "+e)}b9(r,e){var t=r+(r>>1)|0;return(t-e|0)<0&&(t=e),(t-2147483639|0)>0&&(t=e>2147483639?2147483647:2147483639),t}o5(r){for(var e=1,t=r.x();t.y();){var i=t.z(),a=lr(31,e),s=i==null?null:Sr(i);e=a+(s??0)|0}return e}n5(r,e){if(r.c1()!==e.c1())return!1;for(var t=e.x(),i=r.x();i.y();){var a=i.z(),s=t.z();if(!P(a,s))return!1}return!0}}class Dd{constructor(r){this.mg_1=r}y(){return this.mg_1.y()}z(){return this.mg_1.z().k2()}}class Ld{constructor(r){this.ng_1=r}y(){return this.ng_1.y()}z(){return this.ng_1.z().l2()}}class Yw{}class Pd extends ya{static qg(r){return this.x4(r)}equals(r){return r===this?!0:r!=null&&E(r,Oe)?gs.f6(this,r):!1}hashCode(){return gs.g6(this)}}class Md extends Pd{constructor(r){return new.target.pg(r)}static pg(r,e){return e===l&&(e={}),e.og_1=r,this.qg(e)}o7(r){return this.og_1.m2(r)}l1(r){return this.o7(r)}x(){var r=this.og_1.r2().x();return new Dd(r)}c1(){return this.og_1.c1()}}class Rd extends ya{constructor(r){return new.target.sg(r)}static sg(r,e){return e===l&&(e={}),e.rg_1=r,this.x4(e)}x7(r){return this.rg_1.n2(r)}l1(r){return this.x7(r)}x(){var r=this.rg_1.r2().x();return new Ld(r)}c1(){return this.rg_1.c1()}}class Bd{g6(r){for(var e=0,t=r.x();t.y();){var i=t.z(),a=e,s=i==null?null:Sr(i);e=a+(s??0)|0}return e}f6(r,e){return r.c1()!==e.c1()?!1:r.j2(e)}}class Fd{constructor(){l1=this,this.tg_1=new y(-1478467534,-1720727600)}equals(r){var e;return r!=null&&E(r,En)?e=r.i1():e=!1,e}hashCode(){return 1}toString(){return"[]"}c1(){return 0}i1(){return!0}ug(r){return!1}l1(r){return!1}d1(r){throw Wn.tb("Empty list doesn't contain element at index "+r+".")}vg(r){return-1}n1(r){return-1}x(){return ms}m1(r){if(r!==0)throw Wn.tb("Index: "+r);return ms}}class $d{y(){return!1}z(){throw Or.j1()}}class xl{constructor(r,e){this.wg_1=r,this.xg_1=e}toString(){return"IndexedValue(index="+this.wg_1+", value="+ue(this.xg_1)+")"}hashCode(){var r=this.wg_1;return r=lr(r,31)+(this.xg_1==null?0:Sr(this.xg_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof xl)||this.wg_1!==r.wg_1||!P(this.xg_1,r.xg_1))}}class Jd{constructor(r){this.yg_1=r}x(){return new Hd(this.yg_1())}}class Hd{constructor(r){this.zg_1=r,this.ah_1=0}y(){return this.zg_1.y()}z(){var r=this.ah_1;return this.ah_1=r+1|0,new xl(Us(r),this.zg_1.z())}}class Gd{}class Kd{constructor(){u1=this,this.eh_1=new y(-888910638,1920087921)}equals(r){var e;return r!=null&&E(r,mn)?e=r.i1():e=!1,e}hashCode(){return 0}toString(){return"{}"}c1(){return 0}i1(){return!0}fh(r){return!1}m2(r){return this.fh(r)}gh(r){return null}o2(r){return this.gh(r)}r2(){return f1()}p2(){return f1()}q2(){return G_()}}class Wd{z(){return this.jh()}}class Yd{constructor(r){this.lh_1=r,this.kh_1=r.mh_1.x()}z(){return this.lh_1.nh_1(this.kh_1.z())}y(){return this.kh_1.y()}}class Zd{constructor(r,e){this.mh_1=r,this.nh_1=e}x(){return new Yd(this)}}class Sl{}class Vd{constructor(r){this.oh_1=r.rh_1,this.ph_1=r.qh_1.x()}z(){if(this.oh_1===0)throw Or.j1();return this.oh_1=this.oh_1-1|0,this.ph_1.z()}y(){return this.oh_1>0&&this.ph_1.y()}}class El{constructor(r,e){if(this.qh_1=r,this.rh_1=e,!(this.rh_1>=0)){var t="count must be non-negative, but was "+this.rh_1+".";throw U.v(b(t))}}v1(r){return r>=this.rh_1?this:new El(this.qh_1,r)}x(){return new Vd(this)}}class Xd{x(){return ms}v1(r){return jl}}class Qd{constructor(r){this.uh_1=r,this.sh_1=null,this.th_1=-2}z(){if(this.th_1<0&&ih(this),this.th_1===0)throw Or.j1();var r=this.sh_1,e=r??g();return this.th_1=-1,e}y(){return this.th_1<0&&ih(this),this.th_1===1}}class qc{constructor(r,e){this.vh_1=r,this.wh_1=e}x(){return new Qd(this)}}class rp{constructor(){c1=this,this.xh_1=new y(1993859828,793161749)}equals(r){var e;return r!=null&&E(r,Oe)?e=r.i1():e=!1,e}hashCode(){return 0}toString(){return"[]"}c1(){return 0}i1(){return!0}ug(r){return!1}l1(r){return!1}yh(r){return r.i1()}j2(r){return this.yh(r)}x(){return ms}}class np{zh(r,e){return je(r,e)}compare(r,e){var t=r!=null&&Xu(r)?r:g();return this.zh(t,e!=null&&Xu(e)?e:g())}}let ep=class{constructor(r){this.ai_1=r}zf(r,e){return this.ai_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.ai_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}},tp=class{};class Zw{}class ip{constructor(){h1=this,this.bi_1=new y(0,0)}wa(r){return null}hashCode(){return 0}toString(){return"EmptyCoroutineContext"}}class ap extends ae{}class sp extends Ac{constructor(r){return new.target.di(r)}static di(r){var e=this.wf();return e.ci_1=r,e}c1(){return this.ci_1.length}d1(r){return Nn.i6(r,this.ci_1.length),this.ci_1[r]}ei(r){if(r===null)return!1;var e=wv(this.ci_1,r.x2_1);return e===r}l1(r){return r instanceof ae?this.ei(r instanceof ae?r:g()):!1}fi(r){if(r===null)return-1;var e=r.x2_1,t=wv(this.ci_1,e);return t===r?e:-1}n1(r){return r instanceof ae?this.fi(r instanceof ae?r:g()):-1}}class op{constructor(){d1=this,this.p1_1=new Tt(1,0)}}class Is{constructor(r,e,t){if(t===0)throw U.v("Step must be non-zero.");if(t===-2147483648)throw U.v("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");this.r1_1=r,this.s1_1=A2(r,e,t),this.t1_1=t}x(){return new lp(this.r1_1,this.s1_1,this.t1_1)}i1(){return this.t1_1>0?this.r1_1>this.s1_1:this.r1_1<this.s1_1}equals(r){var e;return r instanceof Is?e=this.i1()&&r.i1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1&&this.t1_1===r.t1_1:e=!1,e}hashCode(){return this.i1()?-1:lr(31,lr(31,this.r1_1)+this.s1_1|0)+this.t1_1|0}toString(){return this.t1_1>0?""+this.r1_1+".."+this.s1_1+" step "+this.t1_1:""+this.r1_1+" downTo "+this.s1_1+" step "+(-this.t1_1|0)}}class ea{}class Tt extends Is{constructor(r,e){tg(),super(r,e,1)}df(){return this.r1_1}ef(){return this.s1_1}gi(r){return this.r1_1<=r&&r<=this.s1_1}u1(r){return this.gi(typeof r=="number"?r:g())}i1(){return this.r1_1>this.s1_1}equals(r){var e;return r instanceof Tt?e=this.i1()&&r.i1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1:e=!1,e}hashCode(){return this.i1()?-1:lr(31,this.r1_1)+this.s1_1|0}toString(){return""+this.r1_1+".."+this.s1_1}}class lp extends Wd{constructor(r,e,t){super(),this.hi_1=t,this.ii_1=e,this.ji_1=this.hi_1>0?r<=e:r>=e,this.ki_1=this.ji_1?r:this.ii_1}y(){return this.ji_1}jh(){var r=this.ki_1;if(r===this.ii_1){if(!this.ji_1)throw Or.j1();this.ji_1=!1}else this.ki_1=this.ki_1+this.hi_1|0;return r}}class up{q1(r,e,t){return new Is(r,e,t)}}class cp{constructor(r){this.qi_1=r,this.li_1=-1,this.mi_1=Db(r.si_1,0,C(r.ri_1)),this.ni_1=this.mi_1,this.oi_1=null,this.pi_1=0}z(){if(this.li_1===-1&&lh(this),this.li_1===0)throw Or.j1();var r=this.oi_1,e=r instanceof Tt?r:g();return this.oi_1=null,this.li_1=-1,e}y(){return this.li_1===-1&&lh(this),this.li_1===1}}class fp{constructor(r,e,t,i){this.ri_1=r,this.si_1=e,this.ti_1=t,this.ui_1=i}x(){return new cp(this)}}class Vw{constructor(){this.vi_1=0,this.wi_1=1,this.xi_1=2}}class vp{constructor(r){this.yi_1=r,this.zi_1=0,this.aj_1=0,this.bj_1=0,this.cj_1=0}y(){if(this.zi_1!==0)return this.zi_1===1;if(this.cj_1<0)return this.zi_1=2,!1;var r=-1,e=C(this.yi_1),t=this.aj_1,i=C(this.yi_1);if(t<i)r:do{var a=t;t=t+1|0;var s=rr(this.yi_1,a);if(s===10||s===13){r=s===13&&(a+1|0)<C(this.yi_1)&&rr(this.yi_1,a+1|0)===10?2:1,e=a;break r}}while(t<i);return this.zi_1=1,this.cj_1=r,this.bj_1=e,!0}z(){if(!this.y())throw Or.j1();this.zi_1=0;var r=this.bj_1,e=this.aj_1;this.aj_1=this.bj_1+this.cj_1|0;var t=this.yi_1;return b(Un(t,e,r))}}class hp{constructor(r){this.dj_1=r}x(){return new vp(this.dj_1)}}class dp{constructor(){p1=this,this.ej_1=new y(0,0),this.fj_1=Ct(new y(-1,1073741823)),this.gj_1=Ct(new y(1,-1073741824)),this.hj_1=new y(-16162,2147483647),this.ij_1=new y(-16162,2147483647)}jj(r){var e=new xe(r),t=e.kj_1;if(cf(t)){var i=wn(t);if(!(tr(new y(387905,-1073741824),i)<=0&&tr(i,new y(-387905,1073741823))<=0))throw ns.fc(wn(t).toString()+" ns is out of nanoseconds range")}else{var a,s=wn(t);if(tr(new y(1,-1073741824),s)<0&&tr(s,new y(-1,1073741823))<0)a=!1;else{var o=wn(t);a=!(ir(o,new y(-1,1073741823))||ir(o,new y(1,-1073741824)))}if(a)throw ns.fc(wn(t).toString()+" ms is out of milliseconds range");var u=wn(t);if(tr(new y(1108857478,-1074),u)<=0&&tr(u,new y(-1108857478,1073))<=0)throw ns.fc(wn(t).toString()+" ms is denormalized")}return e.kj_1}lj(r){var e;try{var t=new xe(vS(r,!0)),i=t.kj_1;if(P(new xe(i),new xe(Wr().ij_1))){var a="invariant failed";throw xr.o3(b(a))}e=t.kj_1}catch(o){if(o instanceof U){var s=o;throw U.lb("Invalid ISO duration string format: '"+r+"'.",s)}else throw o}return e}}class xe{constructor(r){Wr(),this.kj_1=r}mj(r){return mg(this.kj_1,r)}d(r){return tS(this,r)}toString(){return lS(this.kj_1)}hashCode(){return cS(this.kj_1)}equals(r){return fS(this.kj_1,r)}}class pp{constructor(){_1=this,this.nj_1=new $u(new y(-1,1073741823),!0),this.oj_1=new $u(new y(-1,2147483647),!1)}}class $u{constructor(r,e){Sg(),this.pj_1=r,this.qj_1=e;var t=this,i=this.pj_1;t.rj_1=Ar(i,M(10));var a=this,s=this.pj_1;a.sj_1=It(s,M(10))}}class Xw{}class _p{constructor(){m1=this,this.tj_1=new rt(new y(342103040,-7347440),0),this.uj_1=new rt(new y(-90867457,7347410),999999999)}vj(r,e){var t=new y(1e9,0),i=Ar(e,t);if(tr(qe(e,t),new y(0,0))<0&&!ir(qr(i,t),e)){var a=i;i=Hr(a,Ve())}var s=i,o=hr(r,s);if(tr(qe(r,o),new y(0,0))<0&&tr(qe(r,s),new y(0,0))>=0)return tr(r,new y(0,0))>0?xt().uj_1:xt().tj_1;var u=o,c;if(tr(u,new y(342103040,-7347440))<0)c=this.tj_1;else if(tr(u,new y(-90867457,7347410))>0)c=this.uj_1;else{var f=new y(1e9,0),v=It(e,f),h=hr(v,ps(f,As(ps(qe(v,f),wi(v,tn(v))),63))),d=Xr(h);c=new rt(u,d)}return c}wj(r,e){return this.vj(r,M(e))}xj(r){return AS(r).yj()}}class rt{constructor(r,e){xt(),this.zj_1=r,this.ak_1=e;var t=this.zj_1;if(!(tr(new y(342103040,-7347440),t)<=0&&tr(t,new y(-90867457,7347410))<=0)){var i="Instant exceeds minimum or maximum instant";throw U.v(b(i))}}bk(r){var e=this.zj_1.f3(r.zj_1);return e!==0?e:je(this.ak_1,r.ak_1)}d(r){return this.bk(r instanceof rt?r:g())}equals(r){var e;if(this===r)e=!0;else{var t,i;r instanceof rt?i=ir(this.zj_1,r.zj_1):i=!1,i?t=this.ak_1===r.ak_1:t=!1,e=t}return e}hashCode(){return this.zj_1.hashCode()+lr(51,this.ak_1)|0}toString(){return CS(this)}}class gp{constructor(r,e){this.kk_1=r,this.lk_1=e}yj(){if(tr(this.kk_1,xt().tj_1.zj_1)<0||tr(this.kk_1,xt().uj_1.zj_1)>0)throw Uc.qk("The parsed date is outside the range representable by Instant (Unix epoch second "+this.kk_1.toString()+")");return xt().wj(this.kk_1,this.lk_1)}}class Oc{constructor(r,e){this.rk_1=r,this.sk_1=e}yj(){throw Uc.qk(this.rk_1+' when parsing an Instant from "'+vf(this.sk_1,64)+'"')}}class mp{ck(r){var e=r.zj_1,t=new y(86400,0),i=Ar(e,t);if(tr(qe(e,t),new y(0,0))<0&&!ir(qr(i,t),e)){var a=i;i=Hr(a,Ve())}var s=i,o=new y(86400,0),u=It(e,o),c=hr(u,ps(o,As(ps(qe(u,o),wi(u,tn(u))),63))),f=Xr(c),v,h,d,_=hr(s,M(719528)),m=_;_=Hr(m,M(60));var w=new y(0,0);if(tr(_,new y(0,0))<0){var x=_,k=hr(x,M(1)),S=Ar(k,M(146097)),z=Hr(S,M(1));w=qr(z,M(400));var I=_,A=tn(z),q=qr(A,M(146097));_=hr(I,q)}var N=qr(jn(400),_),$=hr(N,M(591)),O=Ar($,M(146097)),L=_,H=qr(jn(365),O),B=O,F=Ar(B,M(4)),R=hr(H,F),X=O,J=Ar(X,M(100)),er=Hr(R,J),Y=O,G=Ar(Y,M(400)),sr=Hr(L,hr(er,G));if(tr(sr,new y(0,0))<0){var ur=O;O=Hr(ur,Ve());var Q=_,Er=qr(jn(365),O),zr=O,mr=Ar(zr,M(4)),Ir=hr(Er,mr),br=O,Cr=Ar(br,M(100)),Pr=Hr(Ir,Cr),pr=O,Yr=Ar(pr,M(400));sr=Hr(Q,hr(Pr,Yr))}O=hr(O,w);var an=Xr(sr),Gr=(lr(an,5)+2|0)/153|0;h=((Gr+2|0)%12|0)+1|0,d=(an-((lr(Gr,306)+5|0)/10|0)|0)+1|0;var _r=O,Rr=Gr/10|0,$r=hr(_r,M(Rr));v=Xr($r);var nn=f/3600|0,Br=f-lr(nn,3600)|0,sn=Br/60|0,on=Br-lr(sn,60)|0;return new jc(v,h,d,nn,sn,on,r.ak_1)}}class jc{constructor(r,e,t,i,a,s,o){this.dk_1=r,this.ek_1=e,this.fk_1=t,this.gk_1=i,this.hk_1=a,this.ik_1=s,this.jk_1=o}toString(){return"UnboundLocalDateTime("+this.dk_1+"-"+this.ek_1+"-"+this.fk_1+" "+this.gk_1+":"+this.hk_1+":"+this.ik_1+"."+this.jk_1+")"}}class Uc extends U{constructor(r){return new.target.qk(r)}static qk(r){var e=this.v(r);return cn(e,e.pk_1),e}}class yp{}class wp{constructor(r){this.uk_1=r}}class bp extends yp{constructor(r,e){super();var t=this;t.vk_1=xk(r,2)?r:g(),this.wk_1=e;var i=this;i.xk_1=E(this,tt)?this:g(),this.yk_1=Au()}ka(){return ng()}al(r){this.xk_1=null,this.yk_1=r}ma(r){return this.al(r)}*tk(r,e){return yield()=>{var t=e,i=this;return i.xk_1=E(t,tt)?t:g(),this.wk_1=r,ys()}}zk(){r:for(;;){var r=this.yk_1,e=this.xk_1,t;if(e==null){var i=new ai(r)instanceof ai?r:g();return $S(i),i}else t=e;var a=t;if(P(new ai(Au()),new ai(r))){var s;try{var o=this.vk_1,u=this.wk_1;s=ax(o,this,u,a)}catch(d){if(d instanceof Error){var c=d,f=Ug(c);a.ma(f);continue r}else throw d}var v=s;if(v!==ys()){var h=v;a.ma(h)}}else this.yk_1=Au(),a.ma(r)}}}class kp extends ae{}class Nc{constructor(r){this.bl_1=r,this.cl_1=fo}l2(){return this.cl_1===fo&&(this.cl_1=un(this.bl_1)(),this.bl_1=null),this.cl_1}dl(){return this.cl_1!==fo}toString(){return this.dl()?ue(this.l2()):"Lazy value not initialized yet."}}class xp{}class Qw{}class qt{constructor(r){this.el_1=r}equals(r){var e;return r instanceof qt?e=P(this.el_1,r.el_1):e=!1,e}hashCode(){return Sr(this.el_1)}toString(){return"Failure("+this.el_1.toString()+")"}}class ai{constructor(r){this.fl_1=r}toString(){return RS(this.fl_1)}hashCode(){return BS(this.fl_1)}equals(r){return FS(this.fl_1,r)}}class yv extends mo{constructor(r){return new.target.bb(r)}static bb(r){r=r===l?"An operation is not implemented.":r;var e=this.hc(r);return cn(e,e.ab_1),e}}class zl{constructor(r,e){this.ch_1=r,this.dh_1=e}toString(){return"("+ue(this.ch_1)+", "+ue(this.dh_1)+")"}hh(){return this.ch_1}ih(){return this.dh_1}hashCode(){var r=this.ch_1==null?0:Sr(this.ch_1);return r=lr(r,31)+(this.dh_1==null?0:Sr(this.dh_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof zl)||!P(this.ch_1,r.ch_1)||!P(this.dh_1,r.dh_1))}}class Sp{constructor(){y1=this,this.dg_1=new Et(new y(0,0),new y(0,0)),this.eg_1=16,this.fg_1=128}gg(r,e){var t;return ir(r,new y(0,0))&&ir(e,new y(0,0))?t=this.dg_1:t=new Et(r,e),t}gl(r){var e;switch(r.length){case 36:e=e2(r);break;case 32:e=t2(r);break;default:throw U.v("Expected either a 36-char string in the standard hex-and-dash UUID format or a 32-char hexadecimal string, "+('but was "'+JS(r,64)+'" of length '+r.length))}return e}}class Et{constructor(r,e){Ls(),this.hl_1=r,this.il_1=e}toString(){return this.jl()}jl(){var r=new Int8Array(36);Ya(this.hl_1,r,0,0,4);var e=45,t=Z(e);r[8]=Mn(t),Ya(this.hl_1,r,9,4,6);var i=45,a=Z(i);r[13]=Mn(a),Ya(this.hl_1,r,14,6,8);var s=45,o=Z(s);r[18]=Mn(o),Ya(this.il_1,r,19,0,2);var u=45,c=Z(u);return r[23]=Mn(c),Ya(this.il_1,r,24,2,8),Zx(r)}equals(r){return this===r?!0:r instanceof Et?ir(this.hl_1,r.hl_1)&&ir(this.il_1,r.il_1):!1}kl(r){var e;if(ir(this.hl_1,r.hl_1)){var o=this.il_1,u=o,c=r.il_1,f=c;e=bt(u,f)}else{var t=this.hl_1,i=t,a=r.hl_1,s=a;e=bt(i,s)}return e}d(r){return this.kl(r instanceof Et?r:g())}hashCode(){return qe(this.hl_1,this.il_1).hashCode()}}class Ep{constructor(){w1=this,this.ll_1=0,this.ml_1=-1,this.nl_1=1,this.ol_1=8}}class Re{constructor(r){Bl(),this.pl_1=r}ql(r){return Ng(this.pl_1,r)}d(r){return HS(this,r)}toString(){return b1(this.pl_1)}hashCode(){return this.pl_1}equals(r){return GS(this.pl_1,r)}}class zp{constructor(r){this.rl_1=r,this.sl_1=0}y(){return this.sl_1<this.rl_1.length}tl(){var r;if(this.sl_1<this.rl_1.length){var e=this.sl_1;this.sl_1=e+1|0;var t=this.rl_1[e];r=t}else throw Or.r(this.sl_1.toString());return r}z(){return new Re(this.tl())}}class oi{constructor(r){this.ul_1=r}c1(){return hi(this.ul_1)}x(){return YS(this.ul_1)}vl(r){return Dg(this.ul_1,r)}l1(r){return ZS(this,r)}i1(){return VS(this.ul_1)}toString(){return XS(this.ul_1)}hashCode(){return QS(this.ul_1)}equals(r){return rE(this.ul_1,r)}}class Ip{constructor(){k1=this,this.wl_1=0,this.xl_1=-1,this.yl_1=4,this.zl_1=32}}class Xn{constructor(r){Fl(),this.am_1=r}bm(r){return Lg(this.am_1,r)}d(r){return nE(this,r)}toString(){return x1(this.am_1)}hashCode(){return this.am_1}equals(r){return eE(this.am_1,r)}}class Cp{constructor(r){this.cm_1=r,this.dm_1=0}y(){return this.dm_1<this.cm_1.length}em(){var r;if(this.dm_1<this.cm_1.length){var e=this.dm_1;this.dm_1=e+1|0;var t=this.cm_1[e];r=t}else throw Or.r(this.dm_1.toString());return r}z(){return new Xn(this.em())}}class li{constructor(r){this.fm_1=r}c1(){return di(this.fm_1)}x(){return aE(this.fm_1)}gm(r){return Pg(this.fm_1,r)}l1(r){return sE(this,r)}i1(){return oE(this.fm_1)}toString(){return lE(this.fm_1)}hashCode(){return uE(this.fm_1)}equals(r){return cE(this.fm_1,r)}}class Ap{constructor(){S1=this,this.hm_1=new y(0,0),this.im_1=new y(-1,-1),this.jm_1=8,this.km_1=64}}class Qn{constructor(r){Ps(),this.lm_1=r}mm(r){return Mg(this.lm_1,r)}d(r){return fE(this,r)}toString(){return E1(this.lm_1)}hashCode(){return vE(this.lm_1)}equals(r){return hE(this.lm_1,r)}}class Tp{constructor(r){this.nm_1=r,this.om_1=0}y(){return this.om_1<this.nm_1.length}pm(){var r;if(this.om_1<this.nm_1.length){var e=this.om_1;this.om_1=e+1|0;var t=this.nm_1[e];r=t}else throw Or.r(this.om_1.toString());return r}z(){return new Qn(this.pm())}}class ui{constructor(r){this.qm_1=r}c1(){return pi(this.qm_1)}x(){return _E(this.qm_1)}rm(r){return Rg(this.qm_1,r)}l1(r){return gE(this,r)}i1(){return mE(this.qm_1)}toString(){return yE(this.qm_1)}hashCode(){return wE(this.qm_1)}equals(r){return bE(this.qm_1,r)}}class qp{constructor(){z1=this,this.sm_1=0,this.tm_1=-1,this.um_1=2,this.vm_1=16}}class Be{constructor(r){$l(),this.wm_1=r}xm(r){return Bg(this.wm_1,r)}d(r){return kE(this,r)}toString(){return I1(this.wm_1)}hashCode(){return this.wm_1}equals(r){return xE(this.wm_1,r)}}class Op{constructor(r){this.ym_1=r,this.zm_1=0}y(){return this.zm_1<this.ym_1.length}an(){var r;if(this.zm_1<this.ym_1.length){var e=this.zm_1;this.zm_1=e+1|0;var t=this.ym_1[e];r=t}else throw Or.r(this.zm_1.toString());return r}z(){return new Be(this.an())}}class ci{constructor(r){this.bn_1=r}c1(){return _i(this.bn_1)}x(){return zE(this.bn_1)}cn(r){return Fg(this.bn_1,r)}l1(r){return IE(this,r)}i1(){return CE(this.bn_1)}toString(){return AE(this.bn_1)}hashCode(){return TE(this.bn_1)}equals(r){return qE(this.bn_1,r)}}function rb(n){return new Tt(0,Dc(n))}function nb(n,r){if(r==null){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,n[i]==null)return i}while(e<=t)}else{var a=0,s=n.length-1|0;if(a<=s)do{var o=a;if(a=a+1|0,P(r,n[o]))return o}while(a<=s)}return-1}function eb(n,r){return sb(n,r)>=0}function tb(n,r){return ob(n,r)>=0}function ib(n,r){return lb(n,r)>=0}function ab(n,r){return ub(n,r)>=0}function Dc(n){return n.length-1|0}function sb(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function ob(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function lb(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,ir(r,n[i]))return i}while(e<=t);return-1}function ub(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function cb(n){return n.length-1|0}function jp(n,r,e,t,i,a,s){return r=r===l?", ":r,e=e===l?"":e,t=t===l?"":t,i=i===l?-1:i,a=a===l?"...":a,s=s===l?null:s,fb(n,rn.f(),r,e,t,i,a,s).toString()}function fb(n,r,e,t,i,a,s,o){e=e===l?", ":e,t=t===l?"":t,i=i===l?"":i,a=a===l?-1:a,s=s===l?"...":s,o=o===l?null:o,r.g(t);var u=0,c=0,f=n.length;r:for(;c<f;){var v=n[c];if(c=c+1|0,u=u+1|0,u>1&&r.g(e),a<0||u<=a)ig(r,v,o);else break r}return a>=0&&u>a&&r.g(s),r.g(i),r}function vb(n){return new Tt(0,_b(n))}function hb(n){var r;switch(n.length){case 0:r=dr();break;case 1:r=On(n[0]);break;default:var e=n.slice();r=Cl(e);break}return r}function db(n){return new Jd(bb(n))}function Up(n){switch(n.length){case 0:return Ot();case 1:return Xc(n[0]);default:return Np(n,Tn.i(n.length))}}function pb(n){return gb(n,T.m())}function _b(n){return n.length-1|0}function Np(n,r){for(var e=0,t=n.length;e<t;){var i=n[e];e=e+1|0,r.n(i)}return r}function gb(n,r){for(var e=0,t=n.length;e<t;){var i=n[e];e=e+1|0,i!=null&&r.n(i)}return r}function mb(n,r){return wb(n,r)>=0}function Dp(n){var r;switch(n.length){case 0:throw Or.r("Array is empty.");case 1:r=n[0];break;default:throw U.v("Array has more than one element.")}return r}function yb(n){return n.length===0?X_():new nd(n)}function wb(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function wv(n,r){return 0<=r&&r<=(n.length-1|0)?n[r]:null}function bb(n){return()=>Fp(n)}function V(n,r,e,t,i,a,s){return r=r===l?", ":r,e=e===l?"":e,t=t===l?"":t,i=i===l?-1:i,a=a===l?"...":a,s=s===l?null:s,Lp(n,rn.f(),r,e,t,i,a,s).toString()}function Lp(n,r,e,t,i,a,s,o){e=e===l?", ":e,t=t===l?"":t,i=i===l?"":i,a=a===l?-1:a,s=s===l?"...":s,o=o===l?null:o,r.g(t);var u=0,c=n.x();r:for(;c.y();){var f=c.z();if(u=u+1|0,u>1&&r.g(e),a<0||u<=a)ig(r,f,o);else break r}return a>=0&&u>a&&r.g(s),r.g(i),r}function kb(n){return hs(n,gi.b1(Zr(n,12)))}function xb(n){for(var r=wo(n.c1()),e=0,t=n.x();t.y();){var i=t.z(),a=e;e=a+1|0,r[a]=i}return r}function fi(n){if(E(n,W)){if(n.c1()<=1)return Ei(n);var r=xi(n),e=qs(r)?r:g();return Ik(e),Cl(e)}var t=Mc(n);return Bk(t),t}function fa(n){return Ei(Pc(n))}function it(n){if(E(n,W)){var r;switch(n.c1()){case 0:r=Ot();break;case 1:var e;E(n,En)?e=n.d1(0):e=n.x().z(),r=Xc(e);break;default:r=hs(n,Tn.i(n.c1()));break}return r}return w2(hs(n,Tn.e1()))}function Ee(n,r){if(E(r,W)){var e=T.g1(n.c1()+r.c1()|0);return e.h1(n),e.h1(r),e}else{var t=T.f1(n);return Ia(t,r),t}}function Sb(n){if(n.i1())throw Or.r("List is empty.");return n.d1(0)}function Ei(n){if(E(n,W)){var r;switch(n.c1()){case 0:r=dr();break;case 1:var e;E(n,En)?e=n.d1(0):e=n.x().z(),r=On(e);break;default:r=Rp(n);break}return r}return K_(Mc(n))}function Lc(n){return n.c1()===1?n.d1(0):null}function Eb(n,r){var e=n.x();if(!e.y())throw Or.j1();for(var t=e.z();e.y();){var i=e.z();r.compare(t,i)>0&&(t=i)}return t}function Pc(n){var r;return E(n,W)?r=Tn.k1(n):r=hs(n,Tn.e1()),r}function mi(n,r){var e=T.g1(n.c1()+1|0);return e.h1(n),e.n(r),e}function zb(n,r){return E(n,W)?n.l1(r):Ab(n,r)>=0}function gu(n){return n.i1()?null:n.d1(0)}function Pp(n){var r;switch(n.c1()){case 0:throw Or.r("List is empty.");case 1:r=n.d1(0);break;default:throw U.v("List has more than one element.")}return r}function Ib(n){if(E(n,En))return n.i1()?null:n.d1(0);var r=n.x();return r.y()?r.z():null}function Cb(n,r){var e;if(E(n,W)){var t=n.c1()-r|0;if(t<=0)return dr();if(t===1)return On(Tb(n));if(e=T.g1(t),E(n,En)){if(E(n,zs)){var i=r,a=n.c1();if(i<a)do{var s=i;i=i+1|0,e.n(n.d1(s))}while(i<a)}else for(var o=n.m1(r);o.y();){var u=o.z();e.n(u)}return e}}else e=T.m();for(var c=0,f=n.x();f.y();){var v=f.z();c>=r?e.n(v):c=c+1|0}return K_(e)}function Mp(n){return n.i1()?null:n.d1(n.c1()-1|0)}function hs(n,r){for(var e=n.x();e.y();){var t=e.z();r.n(t)}return r}function Mc(n){return E(n,W)?Rp(n):hs(n,T.m())}function zi(n,r){if(E(n,W)){if(n.c1()<=1)return Ei(n);var e=xi(n),t=qs(e)?e:g();return Ck(t,r),Cl(t)}var i=Mc(n);return Fk(i,r),i}function Rp(n){return T.f1(n)}function Ab(n,r){if(E(n,En))return n.n1(r);for(var e=0,t=n.x();t.y();){var i=t.z();if(Us(e),P(r,i))return e;e=e+1|0}return-1}function Tb(n){if(E(n,En))return Ju(n);var r=n.x();if(!r.y())throw Or.r("Collection is empty.");for(var e=r.z();r.y();)e=r.z();return e}function Ju(n){if(n.i1())throw Or.r("List is empty.");return n.d1(Ns(n))}function qb(n){return new ed(n)}function Ob(n){var r=n.x();if(!r.y())return null;for(var e=r.z();r.y();){var t=r.z();je(e,t)>0&&(e=t)}return e}function Rc(n,r){return r<=-2147483648?tg().p1_1:Me(n,r-1|0)}function jb(n,r){return of.q1(n,r,-1)}function zt(n,r){return n>r?r:n}function vn(n,r){return n<r?r:n}function Ub(n,r){return of.q1(n.r1_1,n.s1_1,n.t1_1>0?r:-r|0)}function Bc(n,r,e){if(tr(r,e)>0)throw U.v("Cannot coerce value to an empty range: maximum "+e.toString()+" is less than minimum "+r.toString()+".");return tr(n,r)<0?r:tr(n,e)>0?e:n}function Nb(n,r){return tr(n,r)<0?r:n}function Db(n,r,e){if(r>e)throw U.v("Cannot coerce value to an empty range: maximum "+e+" is less than minimum "+r+".");return n<r?r:n>e?e:n}function mu(n,r){return tr(n,r)>0?r:n}function so(n,r){var e=Lb(r);return e!=null?n.u1(e):!1}function Lb(n){return tr(new y(-2147483648,-1),n)<=0&&tr(n,new y(2147483647,0))<=0?Xr(n):null}function Cs(n,r){return new Zd(n,r)}function Bp(n){var r=n.x();if(!r.y())return dr();var e=r.z();if(!r.y())return On(e);var t=T.m();for(t.n(e);r.y();)t.n(r.z());return t}function Pb(n){return new td(n)}function Mb(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw U.v(b(e))}var t;return r===0?t=X_():E(n,Sl)?t=n.v1(r):t=new El(n,r),t}function bv(n,r){var e=f2(r),t;e==null?t=null:t=n.c1()+e|0;var i=t,a=Tn.i(i??lr(n.c1(),2));return a.h1(n),Ia(a,r),a}function yo(n,r){var e=Tn.i(n.c1()+1|0);return e.h1(n),e.n(r),e}function Rb(n){if(C(n)===0)throw Or.r("Char sequence is empty.");return rr(n,0)}function Bb(n){var r;switch(C(n)){case 0:throw Or.r("Char sequence is empty.");case 1:r=rr(n,0);break;default:throw U.v("Char sequence has more than one element.")}return r}function Fb(n,r){if(!(r>=0)){var e="Requested character count "+r+" is less than zero.";throw U.v(b(e))}return at(n,zt(r,n.length))}function $b(n){var r=n&65535;return r}function gn(n,r){return n-r|0}function Jb(n,r){return gn(n.x1_1,r instanceof Sn?r.x1_1:g())}function te(n,r){return n-r|0}function Z(n){return n}function yr(n){return String.fromCharCode(n)}function Hb(n,r){return r instanceof Sn?n===r.x1_1:!1}function Gb(n){return n}var Hu;function Fc(){return Hu===l&&new id,Hu}function ue(n){var r=n==null?null:b(n);return r??"null"}function Kb(n,r){var e=n??"null",t=b(r);return e+(t??"null")}var Gu;function Il(){return Gu===l&&new ad,Gu}function Wb(n){var r;return n<0?r=-n:r=n,r}function Fp(n){return new sd(n)}function wo(n){var r="BooleanArray",e=$p(Array(n),!1);return e.$type$=r,e}function $p(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;e=e+1|0,n[i]=r}while(i!==t);return n}function ds(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function yi(n){var r="LongArray",e=$p(Array(n),new y(0,0));return e.$type$=r,e}function ba(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function yu(){return ka(),Jp}var Jp;function Hp(){return ka(),Gp}var Gp;function Ku(){return ka(),Kp}var Kp;function Wp(){return ka(),Yp}var Yp;function Yb(){return ka(),Zp}var Zp;function Zb(n){return ka(),(n|0)===n?ko(n):(Hp()[0]=n,lr(Ku()[Yb()],31)+Ku()[Wp()]|0)}var kv;function ka(){kv||(kv=!0,Jp=new ArrayBuffer(8),Gp=new Float64Array(yu()),new Float32Array(yu()),Kp=new Int32Array(yu()),Hp()[0]=-1,Yp=Ku()[0]!==0?1:0,Zp=1-Wp()|0)}function Ze(){return gr(),Vp}var Vp;function Ve(){return gr(),Xp}var Xp;function xv(){return gr(),Qp}var Qp;function Vb(){return gr(),r_}var r_;function Pe(){return gr(),n_}var n_;function Sv(){return gr(),e_}var e_;function tr(n,r){if(gr(),ir(n,r))return 0;var e=ke(n),t=ke(r);return e&&!t?-1:!e&&t?1:ke(Hr(n,r))?-1:1}function Wu(n){return gr(),Mn(n.d3_1)}function Yu(n){return gr(),Wc(n.d3_1)}function Xr(n){return gr(),n.d3_1}function Zn(n){return gr(),n.e3_1*4294967296+Qb(n)}function bo(n,r){if(gr(),vi(n))return"0";if(ke(n))if(ir(n,Pe())){var e=M(r),t=Ar(n,e),i=Xr(Hr(qr(t,e),n)),a=bo(t,r);return a+i.toString(r)}else return"-"+bo(tn(n),r);for(var s=r===2?31:r<=10?9:r<=21?7:r<=35?6:5,o=va(Math.pow(r,s)),u=n,c="";;){var f=Ar(u,o),v=Xr(Hr(u,qr(f,o))),h=v.toString(r);if(u=f,vi(u))return h+c;for(;h.length<s;)h="0"+h;c=h+c}}function ir(n,r){return gr(),n.e3_1===r.e3_1&&n.d3_1===r.d3_1}function Xb(n){return gr(),n.d3_1^n.e3_1}function M(n){return gr(),new y(n,n<0?-1:0)}function ke(n){return gr(),n.e3_1<0}function Hr(n,r){return gr(),hr(n,tn(r))}function Qb(n){return gr(),n.d3_1>=0?n.d3_1:4294967296+n.d3_1}function vi(n){return gr(),n.e3_1===0&&n.d3_1===0}function qr(n,r){if(gr(),vi(n))return Ze();if(vi(r))return Ze();if(ir(n,Pe()))return Ev(r)?Pe():Ze();if(ir(r,Pe()))return Ev(n)?Pe():Ze();if(ke(n)){var e;return ke(r)?e=qr(tn(n),tn(r)):e=tn(qr(tn(n),r)),e}else if(ke(r))return tn(qr(n,tn(r)));if(zv(n,Sv())&&zv(r,Sv()))return va(Zn(n)*Zn(r));var t=n.e3_1>>>16|0,i=n.e3_1&65535,a=n.d3_1>>>16|0,s=n.d3_1&65535,o=r.e3_1>>>16|0,u=r.e3_1&65535,c=r.d3_1>>>16|0,f=r.d3_1&65535,v=0,h=0,d=0,_=0;return _=_+lr(s,f)|0,d=d+(_>>>16|0)|0,_=_&65535,d=d+lr(a,f)|0,h=h+(d>>>16|0)|0,d=d&65535,d=d+lr(s,c)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+lr(i,f)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+lr(a,c)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+lr(s,u)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(((lr(t,f)+lr(i,c)|0)+lr(a,u)|0)+lr(s,o)|0)|0,v=v&65535,new y(d<<16|_,v<<16|h)}function tn(n){return gr(),hr($c(n),new y(1,0))}function va(n){if(gr(),js(n))return Ze();if(n<=-9223372036854776e3)return Pe();if(n+1>=9223372036854776e3)return Vb();if(n<0)return tn(va(-n));var r=4294967296,e=n%r|0,t=n/r|0;return new y(e,t)}function hr(n,r){gr();var e=n.e3_1>>>16|0,t=n.e3_1&65535,i=n.d3_1>>>16|0,a=n.d3_1&65535,s=r.e3_1>>>16|0,o=r.e3_1&65535,u=r.d3_1>>>16|0,c=r.d3_1&65535,f=0,v=0,h=0,d=0;return d=d+(a+c|0)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+(i+u|0)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(t+o|0)|0,f=f+(v>>>16|0)|0,v=v&65535,f=f+(e+s|0)|0,f=f&65535,new y(h<<16|d,f<<16|v)}function Ev(n){return gr(),(n.d3_1&1)===1}function zv(n,r){return gr(),tr(n,r)<0}function $c(n){return gr(),new y(~n.d3_1,~n.e3_1)}function Ar(n,r){if(gr(),vi(r))throw vs.k3("division by zero");if(vi(n))return Ze();if(ir(n,Pe())){if(ir(r,Ve())||ir(r,xv()))return Pe();if(ir(r,Pe()))return Ve();var e=As(n,1),t=Vn(Ar(e,r),1);if(ir(t,Ze()))return ke(r)?Ve():xv();var i=Hr(n,qr(r,t));return hr(t,Ar(i,r))}else if(ir(r,Pe()))return Ze();if(ke(n)){var a;return ke(r)?a=Ar(tn(n),tn(r)):a=tn(Ar(tn(n),r)),a}else if(ke(r))return tn(Ar(n,tn(r)));for(var s=Ze(),o=n;nk(o,r);){for(var u=Zn(o)/Zn(r),c=Math.max(1,Math.floor(u)),f=Math.ceil(Math.log(c)/Math.LN2),v=f<=48?1:Math.pow(2,f-48),h=va(c),d=qr(h,r);ke(d)||rk(d,o);)c=c-v,h=va(c),d=qr(h,r);vi(h)&&(h=Ve()),s=hr(s,h),o=Hr(o,d)}return s}function As(n,r){gr();var e=r&63;return e===0?n:e<32?new y(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>e):new y(n.e3_1>>(e-32|0),n.e3_1>=0?0:-1)}function Vn(n,r){gr();var e=r&63;return e===0?n:e<32?new y(n.d3_1<<e,n.e3_1<<e|(n.d3_1>>>(32-e|0)|0)):new y(0,n.d3_1<<(e-32|0))}function rk(n,r){return gr(),tr(n,r)>0}function nk(n,r){return gr(),tr(n,r)>=0}function It(n,r){return gr(),Hr(n,qr(Ar(n,r),r))}function ps(n,r){return gr(),new y(n.d3_1&r.d3_1,n.e3_1&r.e3_1)}function wi(n,r){return gr(),new y(n.d3_1|r.d3_1,n.e3_1|r.e3_1)}function qe(n,r){return gr(),new y(n.d3_1^r.d3_1,n.e3_1^r.e3_1)}function Jc(n,r){gr();var e=r&63;if(e===0)return n;if(e<32)return new y(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>>e|0);var t;return e===32?t=new y(n.e3_1,0):t=new y(n.e3_1>>>(e-32|0)|0,0),t}function jn(n){gr();var r;return n instanceof y?r=n:r=va(n),r}function ta(n){return gr(),bi(n)&&n.$type$==="LongArray"}function ek(n){return gr(),n!=null?ta(n):!1}var Iv;function gr(){if(!Iv){Iv=!0,Vp=M(0),Xp=M(1),Qp=M(-1),r_=new y(-1,2147483647),n_=new y(0,-2147483648),e_=M(16777216);var n=Array;new en(n,"LongArray",ek)}}function rr(n,r){var e;return Hc(n)?e=K(n,r):e=n.b(r),e}function Hc(n){return typeof n=="string"}function K(n,r){return n.charCodeAt(r)}function C(n){var r;return Hc(n)?r=n.length:r=n.a(),r}function Un(n,r,e){var t;return Hc(n)?t=ie(n,r,e):t=n.c(r,e),t}function tk(n){return jp(n,", ","[","]",l,l,ik)}function t_(n,r){var e=n,t=r;if(e===t)return!0;if(e==null||t==null||!v_(t)||e.length!=t.length)return!1;var i=0,a=e.length;if(i<a)do{var s=i;if(i=i+1|0,!P(e[s],t[s]))return!1}while(i<a);return!0}function i_(n){var r=n;if(r==null)return 0;var e=1,t=0,i=r.length;if(t<i)do{var a=t;t=t+1|0,e=lr(e,31)+Sr(r[a])|0}while(t<i);return e}function ik(n){return b(n)}function je(n,r){var e;switch(typeof n){case"number":var t;typeof r=="number"?t=Cv(n,r):r instanceof y?t=Cv(n,Zn(r)):t=Av(n,r),e=t;break;case"string":case"boolean":case"bigint":e=Av(n,r);break;default:e=ak(n,r);break}return e}function Cv(n,r){var e;if(n<r)e=-1;else if(n>r)e=1;else if(n===r){var t;if(n!==0)t=0;else{var i=1/n,a;i===1/r?a=0:i<0?a=-1:a=1,t=a}e=t}else n!==n?e=r!==r?0:1:e=-1;return e}function Av(n,r){return n<r?-1:n>r?1:0}function ak(n,r){return n.d(r)}function sk(n){return Zu(n)}function Zu(n){if(!("kotlinHashCodeValue$"in n)){var r=a_(),e=new Object;e.value=r,e.enumerable=!1,Object.defineProperty(n,"kotlinHashCodeValue$",e)}return n.kotlinHashCodeValue$}function a_(){return Math.random()*4294967296|0}function b(n){var r;return n==null?r="null":v_(n)?r="[...]":typeof n.toString!="function"?r=ok(n):r=n.toString(),r}function ok(n){return Object.prototype.toString.call(n)}function P(n,r){if(n==null)return r==null;if(r==null)return!1;if(typeof n=="object"&&typeof n.equals=="function")return n.equals(r);if(n!==n)return r!==r;if(typeof n=="number"&&typeof r=="number"){var e;if(n===r){var t;if(n!==0)t=!0;else{var i=1/n;t=i===1/r}e=t}else e=!1;return e}if(Vu(n)&&Vu(r)){if(n===r)return!0;if(n.$id!=r.$id||n.$flags!=r.$flags||n.$arity!=r.$arity)return!1;if(n.$bound==null&&r.$bound==null||n.$bound===r.$bound)return!0;if(!bi(n.$bound)||!bi(r.$bound))return!1;var a=n.$bound,s=r.$bound;return t_(a,s)}return n===r}function Sr(n){if(n==null)return 0;var r=typeof n,e;switch(r){case"object":e=typeof n.hashCode=="function"?n.hashCode():Zu(n);break;case"function":e=Vu(n)?lk(n):Zu(n);break;case"number":e=Zb(n);break;case"boolean":e=s_(n);break;case"string":e=se(String(n));break;case"bigint":e=uk(n);break;case"symbol":e=ck(n);break;default:e=function(){throw new Error("Unexpected typeof `"+r+"`")}();break}return e}function lk(n){var r=n.$flags;r=lr(31,r)+Sr(n.$id)|0;var e=lr(31,r),t=n.$arity;r=e+(t??-1)|0;var i=n.$bound;if(i!=null&&bi(i)){var a=i;r=lr(31,r)+i_(a)|0}return r}function s_(n){return n?1231:1237}function se(n){var r=0,e=n.length,t=0,i=e-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=n.charCodeAt(a);r=lr(r,31)+s|0}while(a!==i);return r}function uk(n){var r=BigInt(32),e=BigInt(4294967295),t=Wb(n),i=0,a;n<0?a=-1:a=1;var s=a;r:for(;;){if(t==0)break r;var o=t&e,u=Number(o);i=lr(31,i)+u|0,t=t>>r}return lr(i,s)}function ck(n){var r=fk(n)?vk():hk(),e=r.get(n);if(e!==l)return e;var t=a_();return r.set(n,t),t}function fk(n){return Symbol.keyFor(n)!=l}function vk(){return wu===l&&(wu=new Map),wu}function hk(){return bu===l&&(bu=new WeakMap),bu}var wu,bu;function cn(n,r){Error.captureStackTrace!=null?Error.captureStackTrace(n,r):n.stack=new Error().stack}function Lr(n){return n.prototype}function Ii(n,r){var e=Object.create(n.prototype);return Gc(e,r),e}function Gc(n,r){r!==l&&Object.assign(n,r)}function ia(n,r,e,t){var i;i=n;var a=i;return Reflect.construct(r,e,a)}function dk(n){return n===l}function o_(n){return{cause:n}}function aa(n,r,e){if(n.name=Object.getPrototypeOf(n).constructor.name,r==null){var t;if(dk(r)){var i=e==null?null:e.toString();t=i??l}else t=l;n.message=t}}function pk(){return u_(),l_}var l_;function _k(n,r){return u_(),n!=l&&n[pk()]?r(n):ox(r)}var Tv;function u_(){Tv||(Tv=!0,l_=tt.Symbol)}function Ts(){throw Mu.s3()}function gk(){throw Ru.w3()}function g(){throw Bu.a4()}function un(n){var r;return n==null?gk():r=n,r}function c_(n,r,e,t,i,a){var s=l;return{kind:n,simpleName:r,associatedObjectKey:t,associatedObjects:i,suspendArity:a,$kClass$:s,defaultConstructor:e}}function p(n,r,e,t,i,a,s,o){var u="class";Kc(u,n,r,e,t,i,a,s,o)}function Kc(n,r,e,t,i,a,s,o,u){var c=c_(n,e,t,o,u,s);r.$metadata$=c;var f=r.prototype;if(a!=null)for(var v=0,h=a.length;v<h;){var d=a[v];v=v+1|0,Object.assign(f,d.prototype),f[d.Symbol]=!0}n==="interface"&&(r.Symbol=Symbol())}function D(n,r,e,t,i,a,s,o){var u="object";Kc(u,n,r,e,t,i,a,s,o)}function Mr(n,r,e,t,i,a,s,o){var u="interface";Kc(u,n,r,e,t,i,a,s,o)}function Qr(n,r,e,t){D(n,"Companion",l,r,e,t,l,l)}function mk(n){var r=n.length,e=Array(r),t=0,i=r-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=n[a];s!=null&&qs(s)?e[a]=s:e[a]=[].slice.call(s)}while(a!==i);return[].concat.apply([],e)}function Mn(n){return n<<24>>24}function ko(n){var r;return n instanceof y?r=Xr(n):r=yk(n),r}function yk(n){var r;return n>2147483647?r=2147483647:n<-2147483648?r=-2147483648:r=n|0,r}function Wc(n){return n<<16>>16}function We(n){var r=ko(n),e=Wc(r);return $b(e)}function Me(n,r){return new Tt(n,r)}function wk(){return Sa(),f_}var f_;function Wi(){return Sa(),c_("class",l,l,l,l,l)}function xa(n,r,e,t,i,a){return Sa(),t.get=t,t.set=i,t.callableName=n,bk(t,kk(r,i),e)}function bk(n,r,e){Sa(),n.$metadata$=r,n.constructor=n;var t=e.Symbol;return t!=null&&(n[t]=!0),Object.assign(n,e.prototype),n}function kk(n,r){return Sa(),wk()[n][r==null?0:1]}function Fe(n,r,e,t,i,a){return Sa(),n.callableName=i,n.$flags=e,n.$arity=r,n.$id=t,n.$bound=a,n}var qv;function Sa(){if(!qv){qv=!0;var n=[Wi(),Wi()],r=[Wi(),Wi()];f_=[n,r,[Wi(),Wi()]]}}function v_(n){return bi(n)||Du(n)}function bi(n){return Array.isArray(n)}function Vu(n){return typeof n=="function"&&n.$flags!=null&&n.$arity!=null}function E(n,r){return n[r.Symbol]===!0}function qs(n){var r;return bi(n)?r=!n.$type$:r=!1,r}function xk(n,r){var e=typeof n;if(e==="function")return n.$arity===r;var t=n==null?null:n.constructor,i=t==null?null:t.$metadata$,a=i==null?null:i.suspendArity,s;if(a==null)return!1;s=a;var o=s,u=!1,c=0,f=o.length;r:for(;c<f;){var v=o[c];if(c=c+1|0,r===v){u=!0;break r}}return u}function h_(n){var r;return typeof n=="number"?r=!0:r=n instanceof y,r}function Xu(n){var r=typeof n;return r==="string"||r==="boolean"||h_(n)||E(n,Ce)}function Os(n){return typeof n=="string"||E(n,Sc)}function es(n){return bi(n)&&n.$type$==="BooleanArray"}function ts(n){return n instanceof Int8Array}function is(n){return n instanceof Int16Array}function as(n){var r;return n instanceof Uint16Array?r=n.$type$==="CharArray":r=!1,r}function ss(n){return n instanceof Int32Array}function os(n){return n instanceof Float32Array}function ls(n){return n instanceof Float64Array}function Sk(n,r){if(r===Object)return n!=null;var e=typeof n,t=typeof r;if(n==null||r==null||e!=="object"&&e!=="function")return!1;var i=t==="object"?Ek(r):r,a=i.$metadata$;return(a==null?null:a.kind)==="interface"?E(n,i):n instanceof i}function Ek(n){return Object.getPrototypeOf(n)}var l;function ki(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=Ci(n,new Int32Array(r));else if(r>t){var a=new Int32Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function d_(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}return O_(n,r,null)}function Yc(n,r){return t_(n,r)}function zk(n){return i_(n)}function Cl(n){return T.i4(n)}function Qu(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=Ci(n,ds(r));else if(r>t){var a=ds(r);a.set(n),i=a}else i=n.slice(0,r);var s=i;return s.$type$="CharArray",s}function r1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=Ci(n,new Float64Array(r));else if(r>t){var a=new Float64Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function n1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=Ci(n,new Float32Array(r));else if(r>t){var a=new Float32Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function ha(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}return Ci(n,yi(r))}function da(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=Ci(n,new Int16Array(r));else if(r>t){var a=new Int16Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function pa(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=Ci(n,new Int8Array(r));else if(r>t){var a=new Int8Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function e1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t="BooleanArray",i=O_(n,r,!1);return i.$type$=t,i}function Ik(n){n.length>1&&Hk(n)}function Ck(n,r){n.length>1&&w_(n,r)}function p_(n){var r=Z(n),e=Tk(Ov().j4_1,r),t=r-Ov().j4_1[e]|0;return t<10?t:-1}function Ak(n){return p_(n)>=0}function Tk(n,r){for(var e=0,t=n.length-1|0,i=-1,a=0;e<=t;)if(i=(e+t|0)/2|0,a=n[i],r>a)e=i+1|0;else{if(r===a)return i;t=i-1|0}return i-(r<a?1:0)|0}var t1;function Ov(){return t1===l&&new od,t1}function qk(n){var r=Z(n);return(9<=r?r<=13:!1)||(28<=r?r<=32:!1)||r===160||r>4096&&(r===5760||(8192<=r?r<=8202:!1)||r===8232||r===8233||r===8239||r===8287||r===12288)}function Ok(n){for(var r=vr.q4(),e=n.r4();e.y();){var t=e.z(),i=n.s4(t),a=r.o2(i),s=(a==null&&!r.m2(i)?0:a)+1|0;r.s2(i,s)}return r}function js(n){return n!==n}function jk(n){var r;return n===0?r=0:r=1<<(31-cs(n)|0),r}function Uk(n){return n===1/0||n===-1/0}function jv(n){var r=n.e3_1,e;if(r===0){var t=n.d3_1;e=32+cs(t)|0}else e=cs(r);return e}function Zc(n){return!Nk(n)&&!Dk(n)}function Vc(n){return!Uk(n)&&!js(n)}function __(n){var r=n.d3_1;return r===0?32+Uv(n.e3_1)|0:Uv(r)}function Nk(n){return n===1/0||n===-1/0}function Dk(n){return n!==n}function Uv(n){var r=~(n|(-n|0));return 32-cs(r)|0}var or;function sa(n,r){var e;if(n===r)e=0;else{var t=n>>>0;t<r>>>0?e=-1:e=1}return e}function bt(n,r){return qe(n,new y(0,-2147483648)).f3(qe(r,new y(0,-2147483648)))}function Lk(n,r){var e=n>>>0,t=e/(r>>>0)|0;return t}function Pk(n,r){var e=n,t=r;if(tr(t,new y(0,0))<0){var i;return bt(n,r)<0?i=new y(0,0):i=new y(1,0),i}if(tr(e,new y(0,0))>=0)return Ar(e,t);var a=Vn(Ar(Jc(e,1),t),1),s=Hr(e,qr(a,t)),o,u=s,c=t;bt(u,c)>=0?o=1:o=0;var f=o,v=hr(a,M(f));return v}function Mk(n,r){if(tr(n,new y(0,0))>=0)return Iu(n,r);var e=Jc(n,1),t=Ar(e,M(r)),i=Vn(t,1),a=i,s=qr(a,M(r)),o=Hr(n,s);if(tr(o,M(r))>=0){var u=o;o=Hr(u,M(r));var c=i;i=hr(c,M(1))}return Iu(i,r)+Iu(o,r)}function xi(n){var r;return n.toArray!==void 0?r=n.toArray():r=g_(n),r}function Us(n){return n<0&&o2(),n}function Rk(n,r,e,t,i){Nn.u4(t,i,n.length);var a=i-t|0;if(Nn.u4(e,e+a|0,r.length),Du(r)&&Du(n)){var s=n.subarray(t,i);r.set(s,e)}else{var o=0;if(o<a)do{var u=o;o=o+1|0,r[e+u|0]=n[t+u|0]}while(o<a)}}function g_(n){return l2(n)}function On(n){var r=[n];return T.i4(r)}function xo(n){return _2([n])}function Xc(n){return b2([n])}function Bk(n){m_(n,Q_())}function Fk(n,r){m_(n,r)}function m_(n,r){if(n.c1()<=1)return or;var e=xi(n);w_(e,r);var t=0,i=e.length;if(t<i)do{var a=t;t=t+1|0,n.v4(a,e[a])}while(t<i)}function y_(n){if(!(n>=0)){var r="capacity must be non-negative.";throw U.v(b(r))}return Array(n)}function So(n,r,e){n.fill(null,r,e)}function Nv(n,r){return d_(n,r)}function Dv(n,r){n[r]=null}var i1;function Wa(){return i1===l&&new vd,i1}function $k(n,r){var e=n.c1();return n.k_1.length=n.c1()+r|0,e}function ku(n,r){return Nn.i6(r,n.c1()),r}function Jk(n,r){return Nn.j5(r,n.c1()),r}var oo;function w_(n,r){if(b_()){var e=Gk(r);n.sort(e)}else k_(n,0,Dc(n),r)}function Hk(n){if(b_()){var r=Kk;n.sort(r)}else k_(n,0,Dc(n),Q_())}function b_(){var n=oo;if(n!=null)return n;oo=!1;var r=[],e=0;if(e<600)do{var t=e;e=e+1|0,r.push(t)}while(e<600);var i=Wk;r.sort(i);var a=1,s=r.length;if(a<s)do{var o=a;a=a+1|0;var u=r[o-1|0],c=r[o];if((u&3)===(c&3)&&u>=c)return!1}while(a<s);return oo=!0,!0}function k_(n,r,e,t){var i=n.length,a=Array(i),s=a1(n,a,r,e,t);if(s!==n){var o=r;if(o<=e)do{var u=o;o=o+1|0,n[u]=s[u]}while(u!==e)}}function a1(n,r,e,t,i){if(e===t)return n;var a=(e+t|0)/2|0,s=a1(n,r,e,a,i),o=a1(n,r,a+1|0,t,i),u=s===r?n:r,c=e,f=a+1|0,v=e;if(v<=t)do{var h=v;if(v=v+1|0,c<=a&&f<=t){var d=s[c],_=o[f];i.compare(d,_)<=0?(u[h]=d,c=c+1|0):(u[h]=_,f=f+1|0)}else c<=a?(u[h]=s[c],c=c+1|0):(u[h]=o[f],f=f+1|0)}while(h!==t);return u}function Gk(n){return(r,e)=>n.compare(r,e)}function Kk(n,r){return je(n,r)}function Wk(n,r){return(n&3)-(r&3)|0}function Yk(n){n.v6_1=null}function x_(n,r){return jk(lr(vn(r,1),3))}function S_(n,r){return cs(r)+1|0}function Lv(n){if(n.v8_1.f7_1!==n.x8_1)throw go.u8("The backing map has been modified after this entry was obtained.")}function _a(n){return n.y6_1.length}function nt(n){return n.b7_1.length}function Al(n){n.f7_1=n.f7_1+1|0}function E_(n,r){Zk(n,r)?I_(n,!0):Vk(n,n.d7_1+r|0)}function Zk(n,r){var e=_a(n)-n.d7_1|0,t=n.d7_1-n.c1()|0;return e<r&&(t+e|0)>=r&&t>=(_a(n)/4|0)}function Vk(n,r){if(r<0)throw oe.a9("too many elements");if(r>_a(n)){var e=Nn.b9(_a(n),r);n.y6_1=Nv(n.y6_1,e);var t=n,i=n.z6_1;t.z6_1=i==null?null:Nv(i,e),n.a7_1=ki(n.a7_1,e);var a=x_(_s,e);a>nt(n)&&C_(n,a)}}function z_(n){var r=n.z6_1;if(r!=null)return r;var e=y_(_a(n));return n.z6_1=e,e}function Tl(n,r){return r==null?0:lr(Sr(r),-1640531527)>>>n.e7_1|0}function I_(n,r){for(var e=0,t=0,i=n.z6_1;e<n.d7_1;){var a=n.a7_1[e];a>=0&&(n.y6_1[t]=n.y6_1[e],i!=null&&(i[t]=i[e]),r&&(n.a7_1[t]=a,n.b7_1[a]=t+1|0),t=t+1|0),e=e+1|0}So(n.y6_1,t,n.d7_1),i==null||So(i,t,n.d7_1),n.d7_1=t}function C_(n,r){Al(n),n.d7_1>n.g7_1&&I_(n,!1),n.b7_1=new Int32Array(r),n.e7_1=S_(_s,r);for(var e=0;e<n.d7_1;){var t=e;if(e=t+1|0,!Xk(n,t))throw xr.o3("This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?")}}function Xk(n,r){for(var e=Tl(n,n.y6_1[r]),t=n.c7_1;;){var i=n.b7_1[e];if(i===0)return n.b7_1[e]=r+1|0,n.a7_1[r]=e,!0;if(t=t-1|0,t<0)return!1;var a=e;e=a-1|0,a===0&&(e=nt(n)-1|0)}}function to(n,r){for(var e=Tl(n,r),t=n.c7_1;;){var i=n.b7_1[e];if(i===0)return-1;if(P(n.y6_1[i-1|0],r))return i-1|0;if(t=t-1|0,t<0)return-1;var a=e;e=a-1|0,a===0&&(e=nt(n)-1|0)}}function Qk(n,r){var e=n.d7_1;r:for(;;){if(e=e-1|0,!(e>=0))break r;if(n.a7_1[e]>=0&&P(un(n.z6_1)[e],r))return e}return-1}function A_(n,r){n.w7();r:for(;;)for(var e=Tl(n,r),t=zt(lr(n.c7_1,2),nt(n)/2|0),i=0;;){var a=n.b7_1[e];if(a===0){if(n.d7_1>=_a(n)){E_(n,1);continue r}var s=n.d7_1;n.d7_1=s+1|0;var o=s;return n.y6_1[o]=r,n.a7_1[o]=e,n.b7_1[e]=o+1|0,n.g7_1=n.g7_1+1|0,Al(n),i>n.c7_1&&(n.c7_1=i),o}if(P(n.y6_1[a-1|0],r))return-a|0;if(i=i+1|0,i>t){C_(n,lr(nt(n),2));continue r}var u=e;e=u-1|0,u===0&&(e=nt(n)-1|0)}}function T_(n,r){Dv(n.y6_1,r);var e=n.z6_1;e==null||Dv(e,r),rx(n,n.a7_1[r]),n.a7_1[r]=-1,n.g7_1=n.g7_1-1|0,Al(n)}function rx(n,r){for(var e=r,t=r,i=0;;){var a=e;e=a-1|0,a===0&&(e=nt(n)-1|0);var s=n.b7_1[e];if(i=i+1|0,i>n.c7_1||s===0)return n.b7_1[t]=0,or;var o=Tl(n,n.y6_1[s-1|0]);((o-e|0)&(nt(n)-1|0))>=i&&(n.b7_1[t]=s,n.a7_1[s-1|0]=t,t=e,i=0)}}function nx(n,r){return n.g7_1===r.c1()&&n.h8(r.r2())}function ex(n,r){var e=A_(n,r.k2()),t=z_(n);if(e>=0)return t[e]=r.l2(),!0;var i=t[(-e|0)-1|0];return P(r.l2(),i)?!1:(t[(-e|0)-1|0]=r.l2(),!0)}function tx(n,r){if(r.i1())return!1;E_(n,r.c1());for(var e=r.x(),t=!1;e.y();)ex(n,e.z())&&(t=!0);return t}var _s,q_;function ix(n,r){var e=new Ic(r),t=e,i=n;return t.pa_1=typeof i=="function"?i(e):n.cb(e),e}function ax(n,r,e,t){var i=new Ic(t),a=n,s=typeof a=="function"?a(r,e,i):n.db(r,e,i);return i.pa_1=s,i.sa()}function sx(n){var r=n instanceof zc?n:null,e=r==null?null:r.va();return e??n}function ox(n){return new Promise(lx(n))}function lx(n){return(r,e)=>{var t=ng(),i=new Cd(t,r,e);return E2(n,i),or}}function Pv(n){cn(n,n.o6_1)}function xu(n){cn(n,n.u_1)}function Su(n){cn(n,n.z8_1)}function Eu(n){cn(n,n.j3_1)}function Mv(n){cn(n,n.q_1)}function Rv(n){cn(n,n.rb_1)}function Bv(n){cn(n,n.n3_1)}function Fv(n){cn(n,n.t8_1)}function $v(n){cn(n,n.xb_1)}function Jv(n){cn(n,n.bc_1)}function zu(n){cn(n,n.dc_1)}function Hv(n){cn(n,n.lc_1)}function ux(n){cn(n,n.r3_1)}function cx(n){cn(n,n.v3_1)}function fx(n){cn(n,n.z3_1)}function Ci(n,r){for(var e=n.length,t=r.length,i=0,a=r;i<e&&i<t;){var s=i,o=i;i=o+1|0,a[s]=n[o]}return r}function O_(n,r,e){var t=n.slice(0,r);n.$type$!==void 0&&(t.$type$=n.$type$);var i=n.length;if(r>i)for(t.length=r;i<r;){var a=i;i=a+1|0,t[a]=e}return t}function lo(n,r){return new Nc(r)}function j_(n){return new Nc(n)}function vx(n){return Xr(wi(As(n,63),Jc(tn(n),63)))}function hx(n){return tr(n,new y(0,0))<0?tn(n):n}function dx(n){var r;if(js(n))throw U.v("Cannot round NaN value.");return n>Zn(new y(-1,2147483647))?r=new y(-1,2147483647):n<Zn(new y(0,-2147483648))?r=new y(0,-2147483648):r=jn(Math.round(n)),r}function px(n){return n<0?-n|0:n}var Eo;function _x(){return Eo===l&&new Cc,Eo}function Gv(){return Mx(),U_}var U_;function gx(n){return n!=null}function mx(n){return h_(n)}function yx(n){return n!=null?typeof n=="boolean":!1}function wx(n){return n!=null?typeof n=="number":!1}function bx(n){return n!=null?typeof n=="number":!1}function kx(n){return n!=null?typeof n=="number":!1}function xx(n){return n instanceof y}function Sx(n){return n!=null?typeof n=="number":!1}function Ex(n){return n!=null?typeof n=="number":!1}function zx(n){return n!=null?qs(n):!1}function Ix(n){return n!=null?typeof n=="string":!1}function Cx(n){return n instanceof Error}function Ax(n){return n!=null?es(n):!1}function Tx(n){return n!=null?as(n):!1}function qx(n){return n!=null?ts(n):!1}function Ox(n){return n!=null?is(n):!1}function jx(n){return n!=null?ss(n):!1}function Ux(n){return typeof n=="bigint"}function Nx(n){return n!=null?ta(n):!1}function Dx(n){return n!=null?os(n):!1}function Lx(n){return n!=null?ls(n):!1}function Px(n){return r=>{var e;return typeof r=="function"?e=r.length===n:e=!1,e}}var s1;function kr(){return s1===l&&new Ad,s1}var Kv;function Mx(){Kv||(Kv=!0,U_=Array(0))}function Nr(n){if(n===String)return kr().stringClass;var r=n.$metadata$,e;if(r!=null){var t;if(r.$kClass$==null){var i=new Fu(n);r.$kClass$=i,t=i}else t=r.$kClass$;e=t}else e=new Fu(n);return e}function Dr(n){var r;switch(typeof n){case"string":r=kr().stringClass;break;case"number":var e;(n|0)===n?e=kr().intClass:e=kr().doubleClass,r=e;break;case"bigint":r=kr().bigIntClass;break;case"boolean":r=kr().booleanClass;break;case"function":var t=kr();r=t.functionClass(n.length);break;default:var i;if(es(n))i=kr().booleanArrayClass;else if(as(n))i=kr().charArrayClass;else if(ts(n))i=kr().byteArrayClass;else if(is(n))i=kr().shortArrayClass;else if(ss(n))i=kr().intArrayClass;else if(ta(n))i=kr().qd();else if(os(n))i=kr().floatArrayClass;else if(ls(n))i=kr().doubleArrayClass;else if(E(n,Ke))i=Nr(Ke);else if(qs(n))i=kr().arrayClass;else{var a=Object.getPrototypeOf(n).constructor,s;if(a===Object)s=kr().anyClass;else if(a===Error)s=kr().throwableClass;else{var o=a;s=Nr(o)}i=s}r=i;break}return r}function Rx(n){n.lastIndex=0}function Wv(n){var r=yr(n).toUpperCase();return r.length>1?n:K(r,0)}function Bx(n){return 48<=n&&n<=57?!0:gn(n,128)<0?!1:Ak(n)}function Qc(n){return qk(n)}function Iu(n,r){return bo(n,Ea(r))}function Ea(n){if(!(2<=n&&n<=36))throw U.v("radix "+n+" was not in valid range 2..36");return n}function rf(n){var r=+n,e;return js(r)&&!N_(n)||r===0&&lt(n)?e=null:e=r,e}function Fx(n,r){return n.toString(Ea(r))}function zo(n){var r=+n;return(js(r)&&!N_(n)||r===0&&lt(n))&&Ca(n),r}function ql(n,r){var e=gn(n,48)>=0&&gn(n,57)<=0?te(n,48):gn(n,65)>=0&&gn(n,90)<=0?te(n,65)+10|0:gn(n,97)>=0&&gn(n,122)<=0?te(n,97)+10|0:gn(n,128)<0?-1:gn(n,65313)>=0&&gn(n,65338)<=0?te(n,65313)+10|0:gn(n,65345)>=0&&gn(n,65370)<=0?te(n,65345)+10|0:p_(n);return e>=r?-1:e}function $x(n){var r=Nl(n),e;return r==null?Ca(n):e=r,e}function N_(n){switch(n.toLowerCase()){case"nan":case"+nan":case"-nan":return!0;default:return!1}}var o1;function Io(){return o1===l&&new Td,o1}function Jx(n,r,e){return()=>n.re(r,e)}function Hx(n){return n.z()}function Gx(n,r){return V(n,"",r,l,l,l,Kx)}function D_(n,r,e,t){n.lastIndex=e;var i=n.exec(r);if(i==null)return null;var a=Me(i.index,n.lastIndex-1|0);return new jd(a,i,t,r)}function Kx(n){return n.jf_1}function Wx(n){return r=>n.d1(r)}function Yx(n,r){if(r<ot(n.sf_1)){var e=n.sf_1.charCodeAt(r);if(55296<=e&&e<=56319){var t=n.sf_1.charCodeAt(r+1|0);if(56320<=t&&t<=57343)return r+2|0}}return r+1|0}function ie(n,r,e){return n.substring(r,e)}function at(n,r){return n.substring(r)}function Zx(n){return Xx(n,0,n.length)}function Yn(n,r,e,t){t=t===l?!1:t;var i=new RegExp(Io().ke(r),t?"gui":"gu"),a=Io().le(e);return n.replace(i,a)}function ze(n,r,e){return e=e===l?!1:e,e?nf(n,0,r,0,r.length,e):n.startsWith(r,0)}function nf(n,r,e,t,i,a){return a=a===l?!1:a,Dl(n,r,e,t,i,a)}function Vx(n,r,e){return e=e===l?!1:e,e?nf(n,n.length-r.length|0,r,0,r.length,e):n.endsWith(r)}function Yv(n,r,e){if(e=e===l?!1:e,n==null)return r==null;if(r==null)return!1;if(!e)return n==r;if(n.length!==r.length)return!1;var t=0,i=n.length;if(t<i)do{var a=t;t=t+1|0;var s=K(n,a),o=K(r,a);if(!Ul(s,o,e))return!1}while(t<i);return!0}function Xx(n,r,e,t){if(!(e<=n.length&&r<=e)){var i="Failed requirement.";throw U.v(b(i))}for(var a=r,s=rn.f();a<e;){var o=a;a=o+1|0;var u=n[o];if(u>=0)s.da(We(u));else if(u>>5===-2){var c=Qx(n,u,a,e);c<=0?(s.da(65533),a=a+(-c|0)|0):(s.da(We(c)),a=a+1|0)}else if(u>>4===-2){var f=r2(n,u,a,e);f<=0?(s.da(65533),a=a+(-f|0)|0):(s.da(We(f)),a=a+2|0)}else if(u>>3===-2){var v=n2(n,u,a,e);if(v<=0)s.da(65533),a=a+(-v|0)|0;else{var h=(v-65536|0)>>10|55296,d=v&1023|56320;s.da(We(h)),s.da(We(d)),a=a+3|0}}else s.da(65533)}return s.toString()}function Qx(n,r,e,t,i){if(!(r&30)||e>=t)return Cn(0);var a=n[e];return(a&192)!==128?Cn(0):r<<6^a^3968}function r2(n,r,e,t,i){if(e>=t)return Cn(0);var a=n[e];if(r&15){if((r&15)===13){if((a&224)!==128)return Cn(0)}else if((a&192)!==128)return Cn(0)}else if((a&224)!==160)return Cn(0);if((e+1|0)===t)return Cn(1);var s=n[e+1|0];return(s&192)!==128?Cn(1):r<<12^a<<6^s^-123008}function n2(n,r,e,t,i){if(e>=t)return Cn(0);var a=n[e];if(r&15){if((r&15)===4){if((a&240)!==128)return Cn(0)}else if((r&15)>4)return Cn(0)}else if((a&240)<=128)return Cn(0);if((a&192)!==128)return Cn(0);if((e+1|0)===t)return Cn(1);var s=n[e+1|0];if((s&192)!==128)return Cn(1);if((e+2|0)===t)return Cn(2);var o=n[e+2|0];return(o&192)!==128?Cn(2):r<<18^a<<12^s<<6^o^3678080}function Cn(n,r,e){return-n|0}var Zv;function za(){if(Zv)return or;Zv=!0,L_=new mt("NANOSECONDS",0,1),new mt("MICROSECONDS",1,1e3),P_=new mt("MILLISECONDS",2,1e6),M_=new mt("SECONDS",3,1e9),R_=new mt("MINUTES",4,6e10),B_=new mt("HOURS",5,36e11),F_=new mt("DAYS",6,864e11)}var L_,P_,M_,R_,B_,F_;function $_(n,r,e){var t=je(r.cg_1,e.cg_1),i;if(t>0){var a=jn(r.cg_1/e.cg_1),s=qr(n,a);i=ir(Ar(s,a),n)?s:tr(n,new y(0,0))>0?new y(-1,2147483647):new y(0,-2147483648)}else t<0?i=Ar(n,jn(e.cg_1/r.cg_1)):i=n;return i}function Vv(n,r,e){var t=je(r.cg_1,e.cg_1);return t>0?qr(n,jn(r.cg_1/e.cg_1)):t<0?Ar(n,jn(e.cg_1/r.cg_1)):n}function Co(){return za(),L_}function Ao(){return za(),P_}function ef(){return za(),M_}function J_(){return za(),R_}function H_(){return za(),B_}function tf(){return za(),F_}function Ya(n,r,e,t,i){var a=e;t<4&&(a=Xv(n.e3_1,r,a,t,zt(i,4))),i>4&&Xv(n.d3_1,r,a,vn(t-4|0,0),i-4|0)}function e2(n){var r="a hexadecimal digit",e=0,t=0;if(t<8)do{var i=t;t=t+1|0;var a=e<<4,s;r:{var o=K(n,i),u=Z(o);if(!(u>>>8|0)&&_n()[u]>=0){s=_n()[u];break r}Kn(n,r,i)}e=a|s}while(t<8);var c=e;if(K(n,8)!==45){var f="'-' (hyphen)";Kn(n,f,8)}var v=0,h=9;if(h<13)do{var d=h;h=h+1|0;var _=v<<4,m;r:{var w=K(n,d),x=Z(w);if(!(x>>>8|0)&&_n()[x]>=0){m=_n()[x];break r}Kn(n,r,d)}v=_|m}while(h<13);var k=v;if(K(n,13)!==45){var S="'-' (hyphen)";Kn(n,S,13)}var z=0,I=14;if(I<18)do{var A=I;I=I+1|0;var q=z<<4,N;r:{var $=K(n,A),O=Z($);if(!(O>>>8|0)&&_n()[O]>=0){N=_n()[O];break r}Kn(n,r,A)}z=q|N}while(I<18);var L=z;if(K(n,18)!==45){var H="'-' (hyphen)";Kn(n,H,18)}var B=0,F=19;if(F<23)do{var R=F;F=F+1|0;var X=B<<4,J;r:{var er=K(n,R),Y=Z(er);if(!(Y>>>8|0)&&_n()[Y]>=0){J=_n()[Y];break r}Kn(n,r,R)}B=X|J}while(F<23);var G=B;if(K(n,23)!==45){var sr="'-' (hyphen)";Kn(n,sr,23)}var ur=0,Q=24;if(Q<28)do{var Er=Q;Q=Q+1|0;var zr=ur<<4,mr;r:{var Ir=K(n,Er),br=Z(Ir);if(!(br>>>8|0)&&_n()[br]>=0){mr=_n()[br];break r}Kn(n,r,Er)}ur=zr|mr}while(Q<28);var Cr=ur,Pr=0,pr=28;if(pr<36)do{var Yr=pr;pr=pr+1|0;var an=Pr<<4,Gr;r:{var _r=K(n,Yr),Rr=Z(_r);if(!(Rr>>>8|0)&&_n()[Rr]>=0){Gr=_n()[Rr];break r}Kn(n,r,Yr)}Pr=an|Gr}while(pr<36);var $r=Pr,nn=k<<16|L,Br=new y(nn,c),sn=G<<16|Cr,on=new y($r,sn);return Ls().gg(Br,on)}function t2(n){var r=0,e=0;if(e<8)do{var t=e;e=e+1|0;var i=r<<4,a;r:{var s=K(n,t),o=Z(s);if(!(o>>>8|0)&&_n()[o]>=0){a=_n()[o];break r}var u="a hexadecimal digit";Kn(n,u,t)}r=i|a}while(e<8);var c=r,f=0,v=8;if(v<16)do{var h=v;v=v+1|0;var d=f<<4,_;r:{var m=K(n,h),w=Z(m);if(!(w>>>8|0)&&_n()[w]>=0){_=_n()[w];break r}var x="a hexadecimal digit";Kn(n,x,h)}f=d|_}while(v<16);var k=f,S=new y(k,c),z=0,I=16;if(I<24)do{var A=I;I=I+1|0;var q=z<<4,N;r:{var $=K(n,A),O=Z($);if(!(O>>>8|0)&&_n()[O]>=0){N=_n()[O];break r}var L="a hexadecimal digit";Kn(n,L,A)}z=q|N}while(I<24);var H=z,B=0,F=24;if(F<32)do{var R=F;F=F+1|0;var X=B<<4,J;r:{var er=K(n,R),Y=Z(er);if(!(Y>>>8|0)&&_n()[Y]>=0){J=_n()[Y];break r}var G="a hexadecimal digit";Kn(n,G,R)}B=X|J}while(F<32);var sr=B,ur=new y(sr,H);return Ls().gg(S,ur)}function Xv(n,r,e,t,i){var a=e,s=3-t|0,o=4-i|0;if(o<=s)do{var u=s;s=s+-1|0;var c=u<<3,f=n>>c&255,v=T2()[f],h=a;a=h+1|0,r[h]=Mn(v>>8);var d=a;a=d+1|0,r[d]=Mn(v)}while(u!==o);return a}function i2(n){return r=>r===n?"(this Collection)":ue(r)}var Nn;function a2(n,r){return Qv(n,r.k2())+"="+Qv(n,r.l2())}function Qv(n,r){return r===n?"(this Map)":ue(r)}function rh(n,r){var e=n.r2(),t;r:{for(var i=e.x();i.y();){var a=i.z();if(P(a.k2(),r)){t=a;break r}}t=null}return t}function s2(n){return r=>a2(n,r)}var gs;function Ns(n){return n.c1()-1|0}function o2(){throw Lu.zb("Index overflow has happened.")}function l2(n){if(n.i1())return[];for(var r=n.c1(),e=Array(r),t=n.x(),i=0;t.y();){var a=i;i=a+1|0,e[a]=t.z()}return e}function dr(){return G_()}function st(n){return pb(n)}function kt(n){return n.length>0?Cl(n):dr()}var l1;function G_(){return l1===l&&new Fd,l1}var ms;function K_(n){switch(n.c1()){case 0:return dr();case 1:return On(n.d1(0));default:return n}}function u2(n){return Me(0,n.c1()-1|0)}function c2(n){for(var r=T.m(),e=n.x();e.y();){var t=e.z();Ia(r,t)}return r}function Zr(n,r){var e;return E(n,W)?e=n.c1():e=r,e}function f2(n){var r;return E(n,W)?r=n.c1():r=null,r}function v2(n,r){if(E(n,Gd))return n.bh(r);var e;r:{var t=n.o2(r);if(t==null&&!n.m2(r))throw Or.r("Key "+ue(r)+" is missing in the map.");e=t;break r}return e}function Tr(){var n=d2();return E(n,mn)?n:g()}function Ol(n){return n.length>0?Y_(n,vr.ha(n.length)):Tr()}function Se(n,r){return v2(n,r)}function W_(n){if(E(n,W)){var r;switch(n.c1()){case 0:r=Tr();break;case 1:var e;E(n,En)?e=n.d1(0):e=n.x().z(),r=xo(e);break;default:r=eh(n,vr.ha(n.c1()));break}return r}return Z_(eh(n,vr.q4()))}function nh(n){return Y_(n,vr.ha(n.length))}function et(n,r){var e;if(n.i1())e=xo(r);else{var t=vr.ia(n);t.s2(r.ch_1,r.dh_1),e=t}return e}function af(n){return vr.ia(n)}function h2(n,r){var e=af(n);return e.t2(r),Z_(e)}var u1;function d2(){return u1===l&&new Kd,u1}function Y_(n,r){return V_(r,n),r}function eh(n,r){return p2(r,n),r}function Z_(n){var r;switch(n.c1()){case 0:r=Tr();break;case 1:r=n;break;default:r=n;break}return r}function V_(n,r){for(var e=0,t=r.length;e<t;){var i=r[e];e=e+1|0;var a=i.hh(),s=i.ih();n.s2(a,s)}}function p2(n,r){for(var e=r.x();e.y();){var t=e.z(),i=t.hh(),a=t.ih();n.s2(i,a)}}function _2(n){var r=fs.l7(n.length);return V_(r,n),r}function Ia(n,r){if(E(r,W))return n.h1(r);for(var e=!1,t=r.x();t.y();){var i=t.z();n.n(i)&&(e=!0)}return e}function th(n){var r;if(n.i1())throw Or.r("List is empty.");return r=n.e5(Ns(n)),r}function sf(n,r){var e;return n==null?e=jl:e=new qc(y2(n),r),e}function g2(n){return yb(n)}function m2(n,r){return new qc(n,r)}function X_(){return jl}var jl;function ih(n){n.sh_1=n.th_1===-2?n.uh_1.vh_1():n.uh_1.wh_1(un(n.sh_1)),n.th_1=n.sh_1==null?0:1}function y2(n){return()=>n}function ii(n){return Up(n)}function Ot(){return f1()}var c1;function f1(){return c1===l&&new rp,c1}function w2(n){switch(n.c1()){case 0:return Ot();case 1:return Xc(n.x().z());default:return n}}function b2(n){return Np(n,gi.b1(n.length))}function k2(n){if(!(n.length>0)){var r="Failed requirement.";throw U.v(b(r))}var e=S2(n);return new ep(e)}function jt(n,r){return n==null?r==null?0:-1:r==null?1:je(n!=null&&Xu(n)?n:g(),r)}function Q_(){var n=rg;return E(n,dn)?n:g()}function x2(n,r,e){for(var t=0,i=e.length;t<i;){var a=e[t];t=t+1|0;var s=a(n),o=a(r),u=jt(s,o);if(u!==0)return u}return 0}var rg;function S2(n){return(r,e)=>x2(r,e,n)}function E2(n,r){var e=sx(ix(n,r)),t=or;e.ma(t)}var v1,h1;function ng(){return h1===l&&new ip,h1}function ys(){return I2()}var ah;function z2(){if(ah)return or;ah=!0,eg=new ap("COROUTINE_SUSPENDED",0)}var eg;function I2(){return z2(),eg}function C2(n){return sp.di(n)}function A2(n,r,e){var t;if(e>0)t=n>=r?r:r-sh(r,n,e)|0;else if(e<0)t=n<=r?r:r+sh(n,r,-e|0)|0;else throw U.v("Step is zero.");return t}function sh(n,r,e){return Cu(Cu(n,e)-Cu(r,e)|0,e)}function Cu(n,r){var e=n%r|0;return e>=0?e:e+r|0}var d1;function tg(){return d1===l&&new op,d1}var of;function ig(n,r,e){e!=null?n.g(e(r)):r==null||Os(r)?n.g(r):r instanceof Sn?n.da(r.x1_1):n.g(b(r))}function Ul(n,r,e){if(e=e===l?!1:e,n===r)return!0;if(!e)return!1;var t=Wv(n),i=Wv(r),a;if(t===i)a=!0;else{var s=yr(t).toLowerCase(),o=K(s,0),u=yr(i).toLowerCase();a=o===K(u,0)}return a}function T2(){return og(),ag}var ag;function q2(){return og(),sg}var sg;function _n(){return q2()}var oh;function og(){if(!oh){oh=!0;for(var n=0,r=new Int32Array(256);n<256;){var e=n,t=K("0123456789abcdef",e>>4),i=Z(t)<<8,a=K("0123456789abcdef",e&15);r[e]=i|Z(a),n=n+1|0}ag=r;for(var s=0,o=new Int32Array(256);s<256;){var u=s,c=K("0123456789ABCDEF",u>>4),f=Z(c)<<8,v=K("0123456789ABCDEF",u&15);o[u]=f|Z(v),s=s+1|0}for(var h=0,d=new Int32Array(256);h<256;)d[h]=-1,h=h+1|0;for(var _=0,m="0123456789abcdef",w=0;w<C(m);){var x=rr(m,w);w=w+1|0;var k=_;_=k+1|0,d[Z(x)]=k}for(var S=0,z="0123456789ABCDEF",I=0;I<C(z);){var A=rr(z,I);I=I+1|0;var q=S;S=q+1|0,d[Z(A)]=q}sg=d;for(var N=0,$=yi(256);N<256;)$[N]=new y(-1,-1),N=N+1|0;for(var O=0,L="0123456789abcdef",H=0;H<C(L);){var B=rr(L,H);H=H+1|0;var F=O;O=F+1|0,$[Z(B)]=M(F)}for(var R=0,X="0123456789ABCDEF",J=0;J<C(X);){var er=rr(X,J);J=J+1|0;var Y=R;R=Y+1|0,$[Z(er)]=M(Y)}}}function O2(n){var r;return C(n)===0?r=D2:r=L2(n),r}function j2(n){return U2(n,"")}function U2(n,r){r=r===l?"":r;for(var e=fg(n),t=T.m(),i=e.x();i.y();){var a=i.z();lt(a)||t.n(a)}for(var s=T.g1(Zr(t,10)),o=t.x();o.y();){var u=o.z(),c=N2(u);s.n(c)}for(var f=Ob(s),v=f??0,h=n.length+lr(r.length,e.c1())|0,d=O2(r),_=Ns(e),m=T.m(),w=0,x=e.x();x.y();){var k=x.z(),S=w;w=S+1|0;var z=Us(S),I;if((z===0||z===_)&&lt(k))I=null;else{var A=Fb(k,v),q;A==null?q=null:q=d(A);var N=q;I=N??k}var $=I;$==null||m.n($)}return Lp(m,rn.fa(h),`
`).toString()}function N2(n){var r;r:{var e=0,t=C(n)-1|0;if(e<=t)do{var i=e;e=e+1|0;var a=rr(n,i);if(!Qc(a)){r=i;break r}}while(e<=t);r=-1}var s=r;return s===-1?n.length:s}function D2(n){return n}function L2(n){return r=>n+r}function Nl(n){return P2(n,10)}function P2(n,r){Ea(r);var e=n.length;if(e===0)return null;var t,i,a,s=K(n,0);if(gn(s,48)<0){if(e===1)return null;if(t=1,s===45)i=!0,a=-2147483648;else if(s===43)i=!1,a=-2147483647;else return null}else t=0,i=!1,a=-2147483647;var o=-59652323,u=o,c=0,f=t;if(f<e)do{var v=f;f=f+1|0;var h=ql(K(n,v),r);if(h<0)return null;if(c<u)if(u===o){if(u=a/r|0,c<u)return null}else return null;if(c=lr(c,r),c<(a+h|0))return null;c=c-h|0}while(f<e);return i?c:-c|0}function Ca(n){throw Pu.nc("Invalid number format: '"+n+"'")}function M2(n){return R2(n,10)}function R2(n,r){Ea(r);var e=n.length;if(e===0)return null;var t,i,a,s=K(n,0);if(gn(s,48)<0){if(e===1)return null;if(t=1,s===45)i=!0,a=new y(0,-2147483648);else if(s===43)i=!1,a=new y(1,-2147483648);else return null}else t=0,i=!1,a=new y(1,-2147483648);var o=new y(1,-2147483648),u=Ar(o,M(36)),c=u,f=new y(0,0),v=t;if(v<e)do{var h=v;v=v+1|0;var d=ql(K(n,h),r);if(d<0)return null;if(tr(f,c)<0)if(ir(c,u)){var _=a;if(c=Ar(_,M(r)),tr(f,c)<0)return null}else return null;var m=f;f=qr(m,M(r));var w=f,x=a,k=hr(x,M(d));if(tr(w,k)<0)return null;var S=f;f=Hr(S,M(d))}while(v<e);return i?f:tn(f)}function lg(n,r){var e=Os(n)?n:g(),t=0,i=C(e)-1|0,a=!1;r:for(;t<=i;){var s=a?i:t,o=rr(e,s),u=mb(r,o);if(!a)u?t=t+1|0:a=!0;else if(u)i=i-1|0;else break r}var c=Un(e,t,i+1|0);return b(c)}function Qi(n,r){return B2(n,r)?ie(n,0,n.length-C(r)|0):n}function Aa(n,r,e){e=e===l?n:e;var t=F2(n,r);return t===-1?e:ie(n,t+1|0,n.length)}function ws(n,r,e){e=e===l?!1:e;var t;return typeof r=="string"?t=To(n,r,l,e)>=0:t=lf(n,r,0,C(n),e)>=0,t}function ug(n,r,e,t){if(e=e===l?!1:e,t=t===l?0:t,r.length===1)return $2(n,yr(r[0]),e,t);for(var i=Pb(J2(n,r,l,e,t)),a=T.g1(Zr(i,10)),s=i.x();s.y();){var o=s.z(),u=H2(n,o);a.n(u)}return a}function cg(n,r){return G2(n,r)?at(n,C(r)):n}function fg(n){return Bp(K2(n))}function vg(n,r,e){return e=e===l?32:e,b(W2(Os(n)?n:g(),r,e))}function ot(n){return C(n)-1|0}function lt(n){var r;r:{for(var e=0;e<C(n);){var t=rr(n,e);if(e=e+1|0,!Qc(t)){r=!1;break r}}r=!0}return r}function B2(n,r,e){e=e===l?!1:e;var t,i;return e?i=!1:i=typeof n=="string",i?t=typeof r=="string":t=!1,t?Vx(n,r):Dl(n,C(n)-C(r)|0,r,0,C(r),e)}function F2(n,r,e,t){e=e===l?ot(n):e,t=t===l?!1:t;var i,a;if(t?a=!0:a=typeof n!="string",a){var s=ba([r]);i=Y2(n,s,e,t)}else{var o=yr(r);i=n.lastIndexOf(o,e)}return i}function To(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i,a;return t?a=!0:a=typeof n!="string",a?i=lf(n,r,e,C(n),t):i=n.indexOf(r,e),i}function lf(n,r,e,t,i,a){a=a===l?!1:a;var s=a?jb(zt(e,ot(n)),vn(t,0)):Me(vn(e,0),zt(t,C(n))),o;if(typeof n=="string"?o=typeof r=="string":o=!1,o){var u=s.r1_1,c=s.s1_1,f=s.t1_1;if(f>0&&u<=c||f<0&&c<=u)do{var v=u;if(u=u+f|0,nf(r,0,n,v,r.length,i))return v}while(v!==c)}else{var h=s.r1_1,d=s.s1_1,_=s.t1_1;if(_>0&&h<=d||_<0&&d<=h)do{var m=h;if(h=h+_|0,Dl(r,0,n,m,C(r),i))return m}while(m!==d)}return-1}function hg(n){var r=0,e=C(n)-1|0,t=!1;r:for(;r<=e;){var i=t?e:r,a=rr(n,i),s=Qc(a);if(!t)s?r=r+1|0:t=!0;else if(s)e=e-1|0;else break r}return Un(n,r,e+1|0)}function $2(n,r,e,t){uf(t);var i=0,a=To(n,r,i,e);if(a===-1||t===1)return On(b(n));var s=t>0,o=T.g1(s?zt(t,10):10);r:do{var u=i,c=a,f=b(Un(n,u,c));if(o.n(f),i=a+r.length|0,s&&o.c1()===(t-1|0))break r;a=To(n,r,i,e)}while(a!==-1);var v=i,h=C(n),d=b(Un(n,v,h));return o.n(d),o}function J2(n,r,e,t,i){return e=e===l?0:e,t=t===l?!1:t,i=i===l?0:i,uf(i),new fp(n,e,i,rS(r,t))}function H2(n,r){return b(Un(n,r.df(),r.ef()+1|0))}function G2(n,r,e){e=e===l?!1:e;var t,i;return e?i=!1:i=typeof n=="string",i?t=typeof r=="string":t=!1,t?ze(n,r):Dl(n,0,r,0,C(r),e)}function K2(n){return new hp(n)}function W2(n,r,e){if(e=e===l?32:e,r<0)throw U.v("Desired length "+r+" is less than zero.");if(r<=C(n))return Un(n,0,C(n));var t=rn.fa(r),i=1,a=r-C(n)|0;if(i<=a)do{var s=i;i=i+1|0,t.da(e)}while(s!==a);return t.g(n),t}function Dl(n,r,e,t,i,a){if(t<0||r<0||r>(C(n)-i|0)||t>(C(e)-i|0))return!1;var s=0;if(s<i)do{var o=s;if(s=s+1|0,!Ul(rr(n,r+o|0),rr(e,t+o|0),a))return!1}while(s<i);return!0}function Y2(n,r,e,t){e=e===l?ot(n):e,t=t===l?!1:t;var i;if(!t&&r.length===1?i=typeof n=="string":i=!1,i){var a=Dp(r),s=yr(a);return n.lastIndexOf(s,e)}var o=zt(e,ot(n));if(0<=o)do{var u=o;o=o+-1|0;var c=rr(n,u),f;r:{for(var v=0,h=r.length;v<h;){var d=r[v];if(v=v+1|0,Ul(d,c,t)){f=!0;break r}}f=!1}if(f)return u}while(0<=o);return-1}function uf(n){if(!(n>=0)){var r="Limit must be non-negative, but was "+n;throw U.v(b(r))}return or}function lh(n){if(n.ni_1<0)n.li_1=0,n.oi_1=null;else{var r,e;if(n.qi_1.ti_1>0?(n.pi_1=n.pi_1+1|0,e=n.pi_1>=n.qi_1.ti_1):e=!1,e?r=!0:r=n.ni_1>C(n.qi_1.ri_1),r)n.oi_1=Me(n.mi_1,ot(n.qi_1.ri_1)),n.ni_1=-1;else{var t=n.qi_1.ui_1(n.qi_1.ri_1,n.ni_1);if(t==null)n.oi_1=Me(n.mi_1,ot(n.qi_1.ri_1)),n.ni_1=-1;else{var i=t.hh(),a=t.ih();n.oi_1=Rc(n.mi_1,i),n.mi_1=i+a|0,n.ni_1=n.mi_1+(a===0?1:0)|0}}n.li_1=1}}function dg(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i;if(!t&&r.length===1?i=typeof n=="string":i=!1,i){var a=Dp(r),s=yr(a);return n.indexOf(s,e)}var o=vn(e,0),u=ot(n);if(o<=u)do{var c=o;o=o+1|0;var f=rr(n,c),v;r:{for(var h=0,d=r.length;h<d;){var _=r[h];if(h=h+1|0,Ul(_,f,t)){v=!0;break r}}v=!1}if(v)return c}while(c!==u);return-1}function Ll(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i,a;if(t?a=!0:a=typeof n!="string",a){var s=ba([r]);i=dg(n,s,e,t)}else{var o=yr(r);i=n.indexOf(o,e)}return i}function Z2(n){switch(n){case"true":return!0;case"false":return!1;default:return null}}function V2(n,r,e){e=e===l?n:e;var t=Ll(n,r);return t===-1?e:ie(n,0,t)}function X2(n,r,e){e=e===l?n:e;var t=Ll(n,r);return t===-1?e:ie(n,t+1|0,n.length)}function Q2(n,r,e,t){e=e===l?ot(n):e,t=t===l?!1:t;var i,a;return t?a=!0:a=typeof n!="string",a?i=lf(n,r,e,0,t,!0):i=n.lastIndexOf(r,e),i}function rS(n,r){return(e,t)=>{var i=dg(e,n,t,r);return i<0?null:j(i,1)}}function wn(n){return As(n,1)}function cf(n){return(Xr(n)&1)===0}function pg(n){return(Xr(n)&1)===1}function nS(n){return cf(n)?Co():Ao()}var p1;function Wr(){return p1===l&&new dp,p1}function _g(n){var r=tn(wn(n)),e=Xr(n)&1;return hS(r,e)}function eS(n,r){var e,t=Xr(n)&1;if(t===(Xr(r)&1)){var i;if(cf(n))i=dS(hr(wn(n),wn(r)));else{var a=ff(wn(n),wn(r)),s;if(ir(a,new y(-16162,2147483647)))throw U.v("Summing infinite durations of different signs yields an undefined result.");ir(a,new y(-1,1073741823))||ir(a,new y(1,-1073741824))?s=Ct(a):s=pS(a),i=s}e=i}else pg(n)?e=uh(n,wn(n),wn(r)):e=uh(n,wn(r),wn(n));return e}function uh(n,r,e){var t=xg(e),i=ff(r,t),a;if(tr(new y(1108857478,-1074),i)<=0&&tr(i,new y(-1108857478,1073))<=0){var s=Hr(e,qo(t));a=Rl(hr(qo(i),s))}else a=Ct(i);return a}function Pl(n){return tr(n,new y(0,0))<0}function Ds(n){return ir(n,Wr().fj_1)||ir(n,Wr().gj_1)}function gg(n){return Pl(n)?_g(n):n}function mg(n,r){var e=qe(n,r);if(tr(e,new y(0,0))<0||!(Xr(e)&1))return n.f3(r);var t=Xr(n)&1,i=t-(Xr(r)&1)|0;return Pl(n)?-i|0:i}function tS(n,r){return mg(n.kj_1,r instanceof xe?r.kj_1:g())}function iS(n){var r;if(Ds(n))r=0;else{var e=kg(n),t=It(e,M(24));r=Xr(t)}return r}function yg(n){var r;if(Ds(n))r=0;else{var e=sS(n),t=It(e,M(60));r=Xr(t)}return r}function wg(n){var r;if(Ds(n))r=0;else{var e=oS(n),t=It(e,M(60));r=Xr(t)}return r}function bg(n){var r;if(Ds(n))r=0;else if(pg(n)){var e=wn(n),t=It(e,M(1e3));r=Xr(qo(t))}else{var i=wn(n),a=1e9,s=It(i,M(a));r=Xr(s)}return r}function Ml(n,r){var e=n;return ir(e,Wr().fj_1)?new y(-1,2147483647):ir(e,Wr().gj_1)?new y(0,-2147483648):$_(wn(n),nS(n),r)}function aS(n){return Ml(n,tf())}function kg(n){return Ml(n,H_())}function sS(n){return Ml(n,J_())}function oS(n){return Ml(n,ef())}function lS(n){var r=n,e;if(ir(r,new y(0,0)))e="0s";else if(ir(r,Wr().fj_1))e="Infinity";else if(ir(r,Wr().gj_1))e="-Infinity";else{var t=Pl(n),i=rn.f();t&&i.da(45);var a=gg(n),s=aS(a),o=iS(a),u=yg(a),c=wg(a),f=bg(a),v=!ir(s,new y(0,0)),h=o!==0,d=u!==0,_=c!==0||f!==0,m=0;if(v&&(i.be(s).da(100),m=m+1|0),h||v&&(d||_)){var w=m;m=w+1|0,w>0&&i.da(32),i.ae(o).da(104)}if(d||_&&(h||v)){var x=m;m=x+1|0,x>0&&i.da(32),i.ae(u).da(109)}if(_){var k=m;m=k+1|0,k>0&&i.da(32),c!==0||v||h||d?uo(n,i,c,f,9,"s",!1):f>=1e6?uo(n,i,f/1e6|0,f%1e6|0,6,"ms",!1):f>=1e3?uo(n,i,f/1e3|0,f%1e3|0,3,"us",!1):i.ae(f).ca("ns")}t&&m>1&&i.ce(1,40).da(41),e=i.toString()}return e}function uo(n,r,e,t,i,a,s){if(r.ae(e),t!==0){r.da(46);var o=vg(t.toString(),i,48),u;r:{var c=C(o)-1|0;if(0<=c)do{var f=c;if(c=c+-1|0,rr(o,f)!==48){u=f;break r}}while(0<=c);u=-1}var v=u+1|0;if(!s&&v<3)r.zd(o,0,v);else{var h=lr((v+2|0)/3|0,3);r.zd(o,0,h)}}r.ca(a)}function uS(n){var r=rn.f();Pl(n)&&r.da(45),r.ca("PT");var e=gg(n),t=kg(e),i=yg(e),a=wg(e),s=bg(e),o=t;Ds(n)&&(o=new y(1316134911,2328));var u=!ir(o,new y(0,0)),c=a!==0||s!==0,f=i!==0||c&&u;return u&&r.be(o).da(72),f&&r.ae(i).da(77),(c||!u&&!f)&&uo(n,r,a,s,9,"S",!0),r.toString()}function cS(n){return n.hashCode()}function fS(n,r){if(!(r instanceof xe))return!1;var e=r.kj_1;return!!ir(n,e)}function Ct(n){var r=Wr(),e=Vn(n,1),t=hr(e,M(1));return r.jj(t)}function ch(n,r){var e=Vv(new y(-387905,1073741823),Co(),r),t;if(tr(tn(e),n)<=0&&tr(n,e)<=0)t=Rl(Vv(n,r,Co()));else if(r.y2(Ao())>=0){var i=vx(n),a=new y(0,-2147483648),s=hr(a,M(1));t=Ct(qr(jn(i),g1(hx(Nb(n,s)),r)))}else t=Ct(Bc($_(n,r,Ao()),new y(1,-1073741824),new y(-1,1073741823)));return t}function vS(n,r,e){if(e=e===l?!0:e,C(n)===0){var t="The string is empty";if(e)throw U.v(t);return Wr().ij_1}var i=0,a=K(n,i),s=!1;a===45?(s=!0,i=i+1|0):a===43&&(i=i+1|0);var o;if(n.length<=i){var u="No components";if(e)throw U.v(u);return Wr().ij_1}else if(K(n,i)===80)o=_S(n,i+1|0,e);else{if(e)throw U.v("");return Wr().ij_1}var c=o;return s&&!P(new xe(c),new xe(Wr().ij_1))?_g(c):c}function hS(n,r){var e=Wr(),t=Vn(n,1),i=hr(t,M(r));return e.jj(i)}function dS(n){var r;return tr(new y(387905,-1073741824),n)<=0&&tr(n,new y(-387905,1073741823))<=0?r=Rl(n):r=Ct(xg(n)),r}function ff(n,r){var e;if(ir(n,new y(-1,1073741823))||ir(n,new y(1,-1073741824))){var t,i;tr(new y(1,-1073741824),r)<0&&tr(r,new y(-1,1073741823))<0?i=!0:i=tr(qe(n,r),new y(0,0))>=0,i?t=n:t=new y(-16162,2147483647),e=t}else ir(r,new y(-1,1073741823))||ir(r,new y(1,-1073741824))?e=r:e=Bc(hr(n,r),new y(1,-1073741824),new y(-1,1073741823));return e}function pS(n){var r;return tr(new y(1108857478,-1074),n)<=0&&tr(n,new y(-1108857478,1073))<=0?r=Rl(qo(n)):r=Ct(Bc(n,new y(1,-1073741824),new y(-1,1073741823))),r}function xg(n){return Ar(n,M(1e6))}function qo(n){return qr(n,M(1e6))}function Rl(n){return Wr().jj(Vn(n,1))}function _S(n,r,e){var t=r;if(t===n.length){if(e)throw U.v("");return Wr().ij_1}var i=new y(0,0),a=new y(0,0),s=!1,o=null;r:for(;t<n.length;){var u=K(n,t);if(u===84){var c;if(s?c=!0:(t=t+1|0,c=t===n.length),c){if(e)throw U.v("");return Wr().ij_1}s=!0;continue r}var f=t,v,h=Sg().nj_1,d=t,_;n:{var m=1,w=d;if(mS(h)){var x=K(n,w);x===45?(m=-1,w=w+1|0):x===43&&(w=w+1|0)}var k=w;e:for(;;){var S;if(k<n.length?S=K(n,k)===48:S=!1,!S)break e;k=k+1|0}w=k;var z=new y(0,0);e:for(;w<n.length;){var I=K(n,w);if(!(48<=I&&I<=57))break e;var A=te(I,48);if(tr(z,fh(h))>0||ir(z,fh(h))&&tr(M(A),yS(h))>0){var q=w;t:for(;;){var N;if(q<n.length){var $=K(n,q);N=48<=$?$<=57:!1}else N=!1;if(!N)break t;q=q+1|0}w=q;var O=w,L=m;if(t=O,t===n.length||t===(f+(u===45||u===43?1:0)|0)){if(e)throw U.v("");return Wr().ij_1}v=L,_=gS(h);break n}var H=z,B=hr(Vn(H,3),Vn(H,1));z=hr(B,M(A)),w=w+1|0}var F=w,R=m;if(t=F,t===n.length||t===(f+(u===45||u===43?1:0)|0)){if(e)throw U.v("");return Wr().ij_1}v=R,_=z}var X=_;if(K(n,t)===46){t=t+1|0;var J=t,er=J,Y=er,G=Y+6|0,sr=n.length,ur=Math.min(G,sr),Q=0;n:for(;Y<ur;){var Er=K(n,Y);if(!(48<=Er&&Er<=57))break n;var zr=Q;Q=((zr<<3)+(zr<<1)|0)+te(Er,48)|0,Y=Y+1|0}var mr=6-(Y-er|0)|0,Ir=0;if(Ir<mr)do{Ir=Ir+1|0;var br=Q;Q=(br<<3)+(br<<1)|0}while(Ir<mr);J=Y;var Cr=Q,Pr=J,pr=Pr,Yr=pr+9|0,an=n.length,Gr=Math.min(Yr,an),_r=0;n:for(;pr<Gr;){var Rr=K(n,pr);if(!(48<=Rr&&Rr<=57))break n;var $r=_r;_r=(($r<<3)+($r<<1)|0)+te(Rr,48)|0,pr=pr+1|0}var nn=9-(pr-Pr|0)|0,Br=0;if(Br<nn)do{Br=Br+1|0;var sn=_r;_r=(sn<<3)+(sn<<1)|0}while(Br<nn);J=pr;var on=_r,pn=J;n:for(;;){var yn;if(pn<n.length){var _e=K(n,pn);yn=48<=_e?_e<=57:!1}else yn=!1;if(!yn)break n;pn=pn+1|0}J=pn;var Ln=J;if(Ln===t||Ln===n.length||K(n,Ln)!==83){if(e)throw U.v("");return Wr().ij_1}t=Ln;var Gn=M(Cr),ge=1e9,Pn=qr(Gn,M(ge)),me=hr(Pn,M(on));a=qr(jn(v),wS(me,ef()))}var Te=bS(n,t),Ue;if(Te==null){var Ne="Unknown duration unit short name: "+yr(K(n,t));if(e)throw U.v(Ne);return Wr().ij_1}else Ue=Te;var ye=Ue;if(o!=null&&o.y2(ye)<=0){var zn="Unexpected order of duration components";if(e)throw U.v(zn);return Wr().ij_1}if(o=ye,ye.equals(tf())){if(s){if(e)throw U.v("");return Wr().ij_1}i=qr(jn(v),g1(X,ye))}else{if(!s){if(e)throw U.v("");return Wr().ij_1}var xn=ff(i,qr(jn(v),g1(X,ye)));if(ir(xn,new y(-16162,2147483647))){if(e)throw U.v("");return Wr().ij_1}i=xn}t=t+1|0}return eS(ch(i,Ao()),ch(a,Co()))}var _1;function Sg(){return _1===l&&new pp,_1}function gS(n){return n.pj_1}function mS(n){return n.qj_1}function fh(n){return n.rj_1}function yS(n){return n.sj_1}function wS(n,r){var e=kS(r),t=Zn(n)*e;return dx(t)}function bS(n,r){var e=K(n,r);return e===68?tf():e===72?H_():e===77?J_():e===83?ef():null}function kS(n){var r;switch(n.x2_1){case 0:r=1e-15;break;case 1:r=1e-12;break;case 2:r=1e-9;break;case 3:r=1e-6;break;case 4:r=6e-5;break;case 5:r=.0036;break;case 6:r=.0864;break;default:var e="Unknown unit: "+n.toString();throw xr.o3(b(e))}return r}function g1(n,r){return xS(n,SS(r))}function xS(n,r){var e;if(ir(n,new y(0,0)))e=new y(0,0);else if(ir(n,new y(1,0)))e=mu(r,new y(-1,1073741823));else if(ir(r,new y(1,0)))e=mu(n,new y(-1,1073741823));else{var t=(128-jv(n)|0)-jv(r)|0;e=t<63?qr(n,r):t>63?new y(-1,1073741823):mu(qr(n,r),new y(-1,1073741823))}return e}function SS(n){var r;switch(n.x2_1){case 6:r=new y(864e5,0);break;case 5:r=new y(36e5,0);break;case 4:r=new y(6e4,0);break;case 3:r=new y(1e3,0);break;case 2:r=new y(1,0);break;default:var e="Wrong unit for millisMultiplier: "+n.toString();throw xr.o3(b(e))}return r}function co(){return Jn(),Eg}var Eg;function ES(){return Jn(),zg}var zg;function zS(){return Jn(),Ig}var Ig;function IS(){return Jn(),Cg}var Cg,m1;function xt(){return m1===l&&new _p,m1}function CS(n){Jn();var r=rn.f(),e=Ag.ck(n),t=e.dk_1;if(px(t)<1e3){var i=rn.f();t>=0?i.ae(t+1e4|0).fe(0):i.ae(t-1e4|0).fe(1),r.g(i)}else t>=1e4&&r.da(43),r.ae(t);if(r.da(45),Za(r,r,e.ek_1),r.da(45),Za(r,r,e.fk_1),r.da(84),Za(r,r,e.gk_1),r.da(58),Za(r,r,e.hk_1),r.da(58),Za(r,r,e.ik_1),e.jk_1!==0){r.da(46);for(var a=0;!(e.jk_1%co()[a+1|0]|0);)a=a+1|0;a=a-(a%3|0)|0;var s=e.jk_1/co()[a]|0;r.ca(at((s+co()[9-a|0]|0).toString(),1))}return r.da(90),r.toString()}function AS(n){Jn();var r=n,e=0;if(C(r)===0)return new Oc("An empty string is not a valid Instant",n);var t=rr(r,e),i;t===43||t===45?(e=e+1|0,i=t):i=32;var a=i,s=e,o=0;r:for(;;){var u;if(e<C(r)){var c=rr(r,e);u=48<=c?c<=57:!1}else u=!1;if(!u)break r;o=lr(o,10)+te(rr(r,e),48)|0,e=e+1|0}var f=e-s|0,v;if(f>10)return ln(n,"Expected at most 10 digits for the year number, got "+f+" digits");if(f===10&&gn(rr(r,s),50)>=0)return ln(n,"Expected at most 9 digits for the year number or year 1000000000, got "+f+" digits");if(f<4)return ln(n,"The year number must be padded to 4 digits, got "+f+" digits");if(a===43&&f===4)return ln(n,"The '+' sign at the start is only valid for year numbers longer than 4 digits");if(a===32&&f!==4)return ln(n,"A '+' or '-' sign is required for year numbers longer than 4 digits");v=a===45?-o|0:o;var h=v;if(C(r)<(e+16|0))return ln(n,"The input string is too short");var d=e,_=Yi(n,"'-'",d,qS);if(_!=null)return _;var m=e+3|0,w=Yi(n,"'-'",m,OS);if(w!=null)return w;var x=e+6|0,k=Yi(n,"'T' or 't'",x,jS);if(k!=null)return k;var S=e+9|0,z=Yi(n,"':'",S,US);if(z!=null)return z;var I=e+12|0,A=Yi(n,"':'",I,NS);if(A!=null)return A;for(var q=ES(),N=0,$=q.length;N<$;){var O=q[N];N=N+1|0;var L=e+O|0,H=Yi(n,"an ASCII digit",L,DS);if(H!=null)return H}var B=_t(r,e+1|0),F=_t(r,e+4|0),R=_t(r,e+7|0),X=_t(r,e+10|0),J=_t(r,e+13|0),er;if(rr(r,e+15|0)===46){var Y=e+16|0;e=Y;var G=0;r:for(;;){var sr;if(e<C(r)){var ur=rr(r,e);sr=48<=ur?ur<=57:!1}else sr=!1;if(!sr)break r;G=lr(G,10)+te(rr(r,e),48)|0,e=e+1|0}var Q=e-Y|0,Er;if(1<=Q&&Q<=9)Er=lr(G,co()[9-Q|0]);else return ln(n,"1..9 digits are supported for the fraction of the second, got "+Q+" digits");er=Er}else e=e+15|0,er=0;var zr=er;if(e>=C(r))return ln(n,"The UTC offset at the end of the string is missing");var mr=rr(r,e),Ir;if(mr===122||mr===90){var br;if(C(r)===(e+1|0))br=0;else return ln(n,"Extra text after the instant at position "+(e+1|0));Ir=br}else if(mr===45||mr===43){var Cr=C(r)-e|0;if(Cr>9){var Pr=e,pr=C(r),Yr=b(Un(r,Pr,pr));return ln(n,'The UTC offset string "'+vf(Yr,16)+'" is too long')}if(Cr%3|0){var an=e,Gr=C(r),_r=b(Un(r,an,Gr));return ln(n,'Invalid UTC offset string "'+_r+'"')}var Rr=zS(),$r=0,nn=Rr.length;r:for(;$r<nn;){var Br=Rr[$r];if($r=$r+1|0,(e+Br|0)>=C(r))break r;if(rr(r,e+Br|0)!==58)return ln(n,"Expected ':' at index "+(e+Br|0)+", got '"+yr(rr(r,e+Br|0))+"'")}var sn=IS(),on=0,pn=sn.length;r:for(;on<pn;){var yn=sn[on];if(on=on+1|0,(e+yn|0)>=C(r))break r;var _e=rr(r,e+yn|0);if(!(48<=_e&&_e<=57))return ln(n,"Expected an ASCII digit at index "+(e+yn|0)+", got '"+yr(rr(r,e+yn|0))+"'")}var Ln=_t(r,e+1|0),Gn;Cr>3?Gn=_t(r,e+4|0):Gn=0;var ge=Gn,Pn;Cr>6?Pn=_t(r,e+7|0):Pn=0;var me=Pn;if(ge>59)return ln(n,"Expected offset-minute-of-hour in 0..59, got "+ge);if(me>59)return ln(n,"Expected offset-second-of-minute in 0..59, got "+me);if(Ln>17&&!(Ln===18&&ge===0&&me===0)){var Te=e,Ue=C(r),Ne=b(Un(r,Te,Ue));return ln(n,"Expected an offset in -18:00..+18:00, got "+Ne)}Ir=lr((lr(Ln,3600)+lr(ge,60)|0)+me|0,mr===45?-1:1)}else return ln(n,"Expected the UTC offset at position "+e+", got '"+yr(mr)+"'");var ye=Ir;if(!(1<=B&&B<=12))return ln(n,"Expected a month number in 1..12, got "+B);if(!(1<=F&&F<=TS(B,vh(h))))return ln(n,"Expected a valid day-of-month for month "+B+" of year "+h+", got "+F);if(R>23)return ln(n,"Expected hour in 0..23, got "+R);if(X>59)return ln(n,"Expected minute-of-hour in 0..59, got "+X);if(J>59)return ln(n,"Expected second-of-minute in 0..59, got "+J);var zn=new jc(h,B,F,R,X,J,zr),xn=M(zn.dk_1),In=qr(jn(365),xn);if(tr(xn,new y(0,0))>=0){var Ra=In,Nt=hr(xn,M(3)),ft=Ar(Nt,M(4)),vt=hr(xn,M(99)),Dt=Ar(vt,M(100)),Di=Hr(ft,Dt),ht=hr(xn,M(399)),Li=Ar(ht,M(400));In=hr(Ra,hr(Di,Li))}else{var De=In,Ba=Ar(xn,M(-4)),dt=Ar(xn,M(-100)),Lt=Hr(Ba,dt),Pi=Ar(xn,M(-400));In=Hr(De,hr(Lt,Pi))}var Fa=In,Mi=(lr(367,zn.ek_1)-362|0)/12|0;In=hr(Fa,M(Mi));var Pt=In,$a=zn.fk_1-1|0;if(In=hr(Pt,M($a)),zn.ek_1>2){var Ja=In;if(In=Hr(Ja,Ve()),!vh(zn.dk_1)){var Ri=In;In=Hr(Ri,Ve())}}var Bi=In,Mt=Hr(Bi,M(719528)),Rt=(lr(zn.gk_1,3600)+lr(zn.hk_1,60)|0)+zn.ik_1|0,Bt=qr(Mt,M(86400)),Fi=hr(Bt,M(Rt)),$i=Hr(Fi,M(ye)),pt=zn.jk_1;return new gp($i,pt)}var Ag;function vf(n,r){Jn();var e;return C(n)<=r?e=b(n):e=b(Un(n,0,r))+"...",e}function TS(n,r){switch(Jn(),n){case 2:return r?29:28;case 4:case 6:case 9:case 11:return 30;default:return 31}}function vh(n){return Jn(),(n&3)===0&&(!!(n%100|0)||(n%400|0)===0)}function Za(n,r,e){e<10&&n.da(48),r.ae(e)}function ln(n,r){return new Oc(r+' when parsing an Instant from "'+vf(n,64)+'"',n)}function Yi(n,r,e,t){var i=rr(n,e),a;return t(new Sn(i))?a=null:a=ln(n,"Expected "+r+", but got '"+yr(i)+"' at position "+e),a}function qS(n){return Jn(),P(n,new Sn(45))}function OS(n){return Jn(),P(n,new Sn(45))}function jS(n){return Jn(),P(n,new Sn(84))||P(n,new Sn(116))}function US(n){return Jn(),P(n,new Sn(58))}function NS(n){return Jn(),P(n,new Sn(58))}function DS(n){Jn();var r=n.x1_1;return 48<=r?r<=57:!1}function _t(n,r){return lr(te(rr(n,r),48),10)+te(rr(n,r+1|0),48)|0}var hh;function Jn(){hh||(hh=!0,Eg=new Int32Array([1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9]),zg=new Int32Array([1,2,4,5,7,8,10,11,13,14]),Ig=new Int32Array([3,6]),Cg=new Int32Array([1,2,4,5,7,8]))}function Au(){return qg(),Tg}var Tg;function LS(n,r){return qg(),new bp(n.uk_1,r).zk()}var dh;function qg(){if(!dh){dh=!0;var n=ys();Tg=n}}var ph;function PS(){if(ph)return or;ph=!0,Og=new kp("PUBLICATION",1)}var Og,fo;function vo(){return PS(),Og}function MS(n){var r=n;return!(r instanceof qt)}function jg(n){var r;return n instanceof qt?r=n.el_1:r=null,r}function RS(n){var r;return n instanceof qt?r=n.toString():r="Success("+ue(n)+")",r}function BS(n){return n==null?0:Sr(n)}function FS(n,r){if(!(r instanceof ai))return!1;var e=r.fl_1;return!!P(n,e)}function $S(n){var r=n;if(r instanceof qt)throw n.el_1}function Ug(n){return new qt(n)}function j(n,r){return new zl(n,r)}var y1;function Ls(){return y1===l&&new Sp,y1}function JS(n,r){return n.length<=r?n:ie(n,0,r)+"..."}function Kn(n,r,e){throw U.v("Expected "+r+" at index "+e+", but was '"+yr(K(n,e))+"'")}var w1;function Bl(){return w1===l&&new Ep,w1}function Ng(n,r){var e=n&255,t=r&255;return je(e,t)}function HS(n,r){return Ng(n.pl_1,r instanceof Re?r.pl_1:g())}function b1(n){return(n&255).toString()}function GS(n,r){return!(!(r instanceof Re)||n!==r.pl_1)}function _h(n){return new Int8Array(n)}function KS(n,r){var e=n[r];return e}function WS(n,r,e){var t=n;t[r]=e}function hi(n){return n.length}function YS(n){return new zp(n)}function Dg(n,r){var e=n,t=r;return eb(e,t)}function ZS(n,r){return r instanceof Re?Dg(n.ul_1,r instanceof Re?r.pl_1:g()):!1}function VS(n){return n.length===0}function XS(n){return"UByteArray(storage="+b(n)+")"}function QS(n){return Sr(n)}function rE(n,r){if(!(r instanceof oi))return!1;var e=r.ul_1;return!!P(n,e)}var k1;function Fl(){return k1===l&&new Ip,k1}function Lg(n,r){return sa(n,r)}function nE(n,r){return Lg(n.am_1,r instanceof Xn?r.am_1:g())}function x1(n){return(n>>>0).toString()}function eE(n,r){return!(!(r instanceof Xn)||n!==r.am_1)}function gh(n){return new Int32Array(n)}function tE(n,r){var e=n[r];return e}function iE(n,r,e){var t=n;t[r]=e}function di(n){return n.length}function aE(n){return new Cp(n)}function Pg(n,r){var e=n,t=r;return tb(e,t)}function sE(n,r){return r instanceof Xn?Pg(n.fm_1,r instanceof Xn?r.am_1:g()):!1}function oE(n){return n.length===0}function lE(n){return"UIntArray(storage="+b(n)+")"}function uE(n){return Sr(n)}function cE(n,r){if(!(r instanceof li))return!1;var e=r.fm_1;return!!P(n,e)}var S1;function Ps(){return S1===l&&new Ap,S1}function Mg(n,r){return bt(n,r)}function fE(n,r){return Mg(n.lm_1,r instanceof Qn?r.lm_1:g())}function E1(n){var r=n;return Mk(r,10)}function vE(n){return n.hashCode()}function hE(n,r){if(!(r instanceof Qn))return!1;var e=r.lm_1;return!!ir(n,e)}function mh(n){return yi(n)}function dE(n,r){var e=n[r];return e}function pE(n,r,e){var t=n;t[r]=e}function pi(n){return n.length}function _E(n){return new Tp(n)}function Rg(n,r){var e=n,t=r;return ib(e,t)}function gE(n,r){return r instanceof Qn?Rg(n.qm_1,r instanceof Qn?r.lm_1:g()):!1}function mE(n){return n.length===0}function yE(n){return"ULongArray(storage="+b(n)+")"}function wE(n){return Sr(n)}function bE(n,r){if(!(r instanceof ui))return!1;var e=r.qm_1;return!!P(n,e)}var z1;function $l(){return z1===l&&new qp,z1}function Bg(n,r){var e=n&65535,t=r&65535;return je(e,t)}function kE(n,r){return Bg(n.wm_1,r instanceof Be?r.wm_1:g())}function I1(n){return(n&65535).toString()}function xE(n,r){return!(!(r instanceof Be)||n!==r.wm_1)}function yh(n){return new Int16Array(n)}function SE(n,r){var e=n[r];return e}function EE(n,r,e){var t=n;t[r]=e}function _i(n){return n.length}function zE(n){return new Op(n)}function Fg(n,r){var e=n,t=r;return ab(e,t)}function IE(n,r){return r instanceof Be?Fg(n.bn_1,r instanceof Be?r.wm_1:g()):!1}function CE(n){return n.length===0}function AE(n){return"UShortArray(storage="+b(n)+")"}function TE(n){return Sr(n)}function qE(n,r){if(!(r instanceof ci))return!1;var e=r.bn_1;return!!P(n,e)}function $g(n){return DE(n,10)}function OE(n){var r=LE(n),e,t=r;return(t==null?null:new Xn(t))==null?Ca(n):e=r,e}function jE(n){var r=$g(n),e,t=r;return(t==null?null:new Qn(t))==null?Ca(n):e=r,e}function UE(n){var r=PE(n),e,t=r;return(t==null?null:new Re(t))==null?Ca(n):e=r,e}function NE(n){var r=ME(n),e,t=r;return(t==null?null:new Be(t))==null?Ca(n):e=r,e}function DE(n,r){Ea(r);var e=n.length;if(e===0)return null;var t=new y(-1,-1),i,a=K(n,0);if(gn(a,48)<0){if(e===1||a!==43)return null;i=1}else i=0;var s=new y(477218588,119304647),o=s,u=M(r),c=new y(0,0),f=i;if(f<e)do{var v=f;f=f+1|0;var h=ql(K(n,v),r);if(h<0)return null;var d=c,_=o;if(bt(d,_)>0)if(P(new Qn(o),new Qn(s))){o=Pk(t,u);var m=c,w=o;if(bt(m,w)>0)return null}else return null;var x=c;c=qr(x,u);var k=c,S=c,z=h,I=z,A=ps(M(I),new y(-1,0)),q=A;c=hr(S,q);var N=c;if(bt(N,k)<0)return null}while(f<e);return c}function LE(n){return hf(n,10)}function PE(n){return RE(n,10)}function ME(n){return BE(n,10)}function hf(n,r){Ea(r);var e=n.length;if(e===0)return null;var t=-1,i,a=K(n,0);if(gn(a,48)<0){if(e===1||a!==43)return null;i=1}else i=0;var s=119304647,o=s,u=r,c=0,f=i;if(f<e)do{var v=f;f=f+1|0;var h=ql(K(n,v),r);if(h<0)return null;var d=c,_=o;if(sa(d,_)>0)if(P(new Xn(o),new Xn(s))){o=Lk(t,u);var m=c,w=o;if(sa(m,w)>0)return null}else return null;var x=c;c=lr(x,u);var k=c,S=c,z=h;c=S+z|0;var I=c;if(sa(I,k)<0)return null}while(f<e);return c}function RE(n,r){var e=hf(n,r),t,i=e;if((i==null?null:new Xn(i))==null)return null;t=e;var a=t,s=-1,o=s&255;if(sa(a,o)>0)return null;var u=a;return Mn(u)}function BE(n,r){var e=hf(n,r),t,i=e;if((i==null?null:new Xn(i))==null)return null;t=e;var a=t,s=-1,o=s&65535;if(sa(a,o)>0)return null;var u=a;return Wc(u)}Mr(Sc,"CharSequence");Mr(Ce,"Comparable");p(rd,"Number");p(nd);p(ed);p(td);Qr(id);p(Sn,"Char",l,l,[Ce]);Mr(W,"Collection");Mr(Oe,"Set",l,l,[W]);Mr(En,"List",l,l,[W]);Mr(Xe,"Entry");Mr(mn,"Map");Mr(ca,"MutableMap",l,l,[mn]);Qr(Mw);p(ae,"Enum",l,l,[Ce]);Qr(ad);p(y,"Long",l,l,[Ce]);Mr(bn,"FunctionAdapter");p(sd);D(Rw,"ByteCompanionObject");D(Bw,"ShortCompanionObject");D(Fw,"IntCompanionObject");D($w,"FloatCompanionObject");D(Jw,"DoubleCompanionObject");D(Hw,"StringCompanionObject");D(Gw,"BooleanCompanionObject");D(od,"Digit");Mr(dn,"Comparator");D(wl,"Unit");p(ya,"AbstractCollection",l,l,[W]);p(Ss,"AbstractMutableCollection",l,l,[W]);p(Ec,"IteratorImpl");p(ld,"ListIteratorImpl");p(ud,"AbstractMutableList",l,l,[En,W]);p(cd,"AbstractMap",l,l,[mn]);p(fd,"AbstractMutableMap",l,l,[ca]);p(Es,"AbstractMutableSet",l,l,[W,Oe]);Qr(vd);Mr(zs,"RandomAccess");p(T,"ArrayList",T.m,l,[En,W,zs]);p(fs,"HashMap",fs.x6,l,[ca]);p(hd,"HashMapKeys",l,l,[W,Oe]);p(dd,"HashMapValues",l,l,[W]);p(pd,"HashMapEntrySetBase",l,l,[W,Oe]);p(_d,"HashMapEntrySet");p(gd);p(md,"HashMapKeysDefault");p(yd);p(wd,"HashMapValuesDefault");p(gi,"HashSet",gi.n8,l,[W,Oe]);Qr(bd);p(bl,"Itr");p(kd,"KeysItr");p(xd,"ValuesItr");p(Sd,"EntriesItr");p(Ed,"EntryRef",l,l,[Xe]);Mr(zd,"InternalMap");Lr(Qe).h8=Kw;p(Qe,"InternalHashMap",Qe.i7,l,[zd]);p(vr,"LinkedHashMap",vr.q4,l,[ca]);p(Tn,"LinkedHashSet",Tn.e1,l,[W,Oe]);Mr(tt,"Continuation");D(Id,"CompletedContinuation",l,l,[tt]);p(zc,"InterceptedCoroutine",l,l,[tt]);p(Ic,"GeneratorCoroutineImpl",l,l,[tt]);p(Cd,l,l,l,[tt]);p(vs,"Exception",vs.nb);p(oe,"RuntimeException",oe.hb);p(le,"UnsupportedOperationException",le.p6);p(U,"IllegalArgumentException",U.kb);p(Or,"NoSuchElementException",Or.j1);p(Wn,"IndexOutOfBoundsException",Wn.sb);p(xr,"IllegalStateException",xr.ub);p(go,"ConcurrentModificationException",go.m9);p(Lu,"ArithmeticException",Lu.yb);p(mo,"Error",mo.ec);p(ns,"AssertionError",ns.cc);p(Pu,"NumberFormatException",Pu.mc);p(Mu,"NoWhenBranchMatchedException",Mu.s3);p(Ru,"NullPointerException",Ru.w3);p(Bu,"ClassCastException",Bu.a4);Mr(Ke,"KClass");p(wa,"KClassImpl",l,l,[Ke]);p(en,"PrimitiveKClassImpl");D(Cc,"NothingKClassImpl");p(Fu,"SimpleKClassImpl");Mr(Si,"KProperty1");D(Ad,"PrimitiveClasses");p(mv,"CharacterCodingException",mv.wd);p(rn,"StringBuilder",rn.f,l,[Sc]);Qr(Td);p(St,"Regex");p(kl,"MatchGroup");p(qd,l,l,l,[W]);p(Ac,"AbstractList",l,l,[En]);p(Od);p(jd);p(Ww,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(mt,"DurationUnit");p(Tc,"IteratorImpl");p(Ud,"ListIteratorImpl");Qr(Nd);p(Dd);p(Ld);Qr(Yw);p(Pd,"AbstractSet",l,l,[Oe]);p(Md);p(Rd);Qr(Bd);D(Fd,"EmptyList",l,l,[En,zs]);D($d,"EmptyIterator");p(xl,"IndexedValue");p(Jd,"IndexingIterable");p(Hd,"IndexingIterator");Mr(Gd,"MapWithDefault",l,l,[mn]);D(Kd,"EmptyMap",l,l,[mn]);p(Wd,"IntIterator");p(Yd);p(Zd,"TransformingSequence");Mr(Sl,"DropTakeSequence");p(Vd);p(El,"TakeSequence",l,l,[Sl]);D(Xd,"EmptySequence",l,l,[Sl]);p(Qd);p(qc,"GeneratorSequence");D(rp,"EmptySet",l,l,[Oe]);D(np,"NaturalOrderComparator",l,l,[dn]);p(ep,"sam$kotlin_Comparator$0",l,l,[dn,bn]);D(tp,"Key");Mr(Zw,"ContinuationInterceptor");D(ip,"EmptyCoroutineContext");p(ap,"CoroutineSingletons");p(sp,"EnumEntriesList",l,l,[En,zs]);Qr(op);p(Is,"IntProgression");Mr(ea,"ClosedRange");p(Tt,"IntRange",l,l,[ea]);p(lp,"IntProgressionIterator");Qr(up);p(cp);p(fp,"DelimitedRangesSequence");D(Vw,"State");p(vp,"LinesIterator");p(hp);Qr(dp);p(xe,"Duration",l,l,[Ce]);Qr(pp);p($u,"LongParser");D(Xw,"FractionalParser");Qr(_p);p(rt,"Instant",l,l,[Ce]);p(gp,"Success");p(Oc,"Failure");Qr(mp);p(jc,"UnboundLocalDateTime");p(Uc,"InstantFormatException");p(yp,"DeepRecursiveScope",l,l,l,[1,2]);p(wp,"DeepRecursiveFunction");p(bp,"DeepRecursiveScopeImpl",l,l,[tt],[1,2]);p(kp,"LazyThreadSafetyMode");p(Nc,"UnsafeLazyImpl");D(xp,"UNINITIALIZED_VALUE");Qr(Qw);p(qt,"Failure");p(ai,"Result");p(yv,"NotImplementedError",yv.bb);p(zl,"Pair");Qr(Sp);p(Et,"Uuid",l,l,[Ce]);Qr(Ep);p(Re,"UByte",l,l,[Ce]);p(zp,"Iterator");p(oi,"UByteArray",l,l,[W]);Qr(Ip);p(Xn,"UInt",l,l,[Ce]);p(Cp,"Iterator");p(li,"UIntArray",l,l,[W]);Qr(Ap);p(Qn,"ULong",l,l,[Ce]);p(Tp,"Iterator");p(ui,"ULongArray",l,l,[W]);Qr(qp);p(Be,"UShort",l,l,[Ce]);p(Op,"Iterator");p(ci,"UShortArray",l,l,[W]);or=new wl;oo=null;_s=new bd;q_=new Id;Nn=new Nd;gs=new Bd;ms=new $d;jl=new Xd;rg=new np;v1=new tp;of=new up;Ag=new mp;fo=new xp;var Vr=Math.imul;class Jl{}class oa{}class cr{}class Fn extends U{static nn(){var r=this.kb();return Tu(r),r}static on(r){var e=this.v(r);return Tu(e),e}static pn(r,e){var t=this.lb(r,e);return Tu(t),t}}class Hl extends Fn{constructor(r,e,t,i){return new.target.xn(r,e,t,i)}static xn(r,e,t,i){var a=this.pn(r,e);return cn(a,a.wn_1),a.un_1=t,a.vn_1=i,a}yn(r){return Hl.xn(r,this,this.un_1,this.vn_1)}}class he{}function Ai(){return!1}function Ti(){return!1}function Ms(){return dr()}class Jg{}class Hg{constructor(r){this.oo_1=r,this.no_1=r.go()}y(){return this.no_1>0}z(){var r=this.oo_1.go(),e=this.no_1;return this.no_1=e-1|0,this.oo_1.lo(r-e|0)}}class Gg{constructor(r){this.po_1=r}x(){return new Hg(this.po_1)}}class Kg{constructor(r){this.qo_1=r,this.ro_1=!1,this.so_1=dr(),this.to_1=T.m(),this.uo_1=gi.n8(),this.vo_1=T.m(),this.wo_1=T.m(),this.xo_1=T.m()}yo(r,e,t,i){if(!this.uo_1.n(r)){var a="Element with name '"+r+"' is already registered in "+this.qo_1;throw U.v(b(a))}this.to_1.n(r),this.vo_1.n(e),this.wo_1.n(t),this.xo_1.n(i)}zo(r,e,t,i,a){t=t===l?dr():t,i=i===l?!1:i;var s;return a===l?(this.yo(r,e,t,i),s=or):s=a.yo.call(this,r,e,t,i),s}}class Rs{}class Ta{constructor(r,e,t,i,a){this.ap_1=r,this.bp_1=e,this.cp_1=t,this.dp_1=a.so_1,this.ep_1=kb(a.to_1);var s=this,o=a.to_1;s.fp_1=xi(o),this.gp_1=L1(a.vo_1);var u=this,c=a.wo_1;u.hp_1=xi(c),this.ip_1=xb(a.xo_1);for(var f=this,v=db(this.fp_1),h=T.g1(Zr(v,10)),d=v.x();d.y();){var _=d.z(),m=j(_.xg_1,_.wg_1);h.n(m)}f.jp_1=W_(h),this.kp_1=L1(i);var w=this;w.lp_1=j_(hz(this))}co(){return this.ap_1}do(){return this.bp_1}go(){return this.cp_1}ho(){return this.dp_1}mp(){return this.ep_1}io(r){return la(this.fp_1,r)}jo(r){var e=this.jp_1.o2(r);return e??-3}ko(r){return la(this.hp_1,r)}lo(r){return la(this.gp_1,r)}mo(r){return Em(this.ip_1,r)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Ta)){e=!1;break r}if(this.co()!==r.co()){e=!1;break r}if(!Yc(this.kp_1,r.kp_1)){e=!1;break r}if(this.go()!==r.go()){e=!1;break r}var t=0,i=this.go();if(t<i)do{var a=t;if(t=t+1|0,this.lo(a).co()!==r.lo(a).co()){e=!1;break r}if(!P(this.lo(a).do(),r.lo(a).do())){e=!1;break r}}while(t<i);e=!0}return e}hashCode(){return hm(this)}toString(){return wm(this)}}class qa{toString(){return un(Dr(this).oc())}hashCode(){return se(this.toString())}}class Gl extends qa{constructor(){Oo=null,super(),Oo=this}}class Wg extends qa{constructor(){jo=null,super(),jo=this}}class Bs extends qa{}class Yg extends Bs{constructor(){Uo=null,super(),Uo=this}}class Zg extends Bs{constructor(){No=null,super(),No=this}}class Vg extends Bs{constructor(){Do=null,super(),Do=this}}class Xg extends Bs{constructor(){Lo=null,super(),Lo=this}}class Hn extends qa{}class Qg extends Hn{constructor(){Po=null,super(),Po=this}}class r0 extends Hn{constructor(){Mo=null,super(),Mo=this}}class n0 extends Hn{constructor(){Ro=null,super(),Ro=this}}class e0 extends Hn{constructor(){Bo=null,super(),Bo=this}}class t0 extends Hn{constructor(){Fo=null,super(),Fo=this}}class i0 extends Hn{constructor(){$o=null,super(),$o=this}}class a0 extends Hn{constructor(){Jo=null,super(),Jo=this}}class s0 extends Hn{constructor(){Ho=null,super(),Ho=this}}class o0 extends Hn{constructor(){Go=null,super(),Go=this}}class Oa extends qa{}class l0 extends Oa{constructor(){Ko=null,super(),Ko=this}}class Kl{}function u0(n){return n.fn(this)}class Wl{}function c0(){return!1}function f0(n){return-1}function v0(n,r,e,t,i){return t=t===l?null:t,i===l?this.nq(n,r,e,t):i.nq.call(this,n,r,e,t)}class qi{np(){throw Fn.on(b(Dr(this))+" can't retrieve untyped values")}op(){return!0}pp(){return null}qp(){var r=this.np();return typeof r=="boolean"?r:g()}rp(){var r=this.np();return typeof r=="number"?r:g()}sp(){var r=this.np();return typeof r=="number"?r:g()}tp(){var r=this.np();return typeof r=="number"?r:g()}up(){var r=this.np();return r instanceof y?r:g()}vp(){var r=this.np();return typeof r=="number"?r:g()}wp(){var r=this.np();return typeof r=="number"?r:g()}xp(){var r=this.np();return r instanceof Sn?r.x1_1:g()}yp(){var r=this.np();return typeof r=="string"?r:g()}zp(r){return this}aq(r,e){return this.bq(r)}cq(r){return this}dq(r){}eq(r,e){return this.qp()}fq(r,e){return this.rp()}gq(r,e){return this.sp()}hq(r,e){return this.tp()}iq(r,e){return this.up()}jq(r,e){return this.vp()}kq(r,e){return this.wp()}lq(r,e){return this.xp()}mq(r,e){return this.zp(r.lo(e))}nq(r,e,t,i){return this.aq(t,i)}}class df{}function FE(n,r){return this.cq(n)}function $E(n,r){n.en(this,r)}class Fs{static tq(){return Ii(this)}cq(r){return this}dq(r){}uq(r,e){return!0}vq(r){throw Fn.on("Non-serializable "+b(Dr(r))+" is not supported by "+b(Dr(this))+" encoder")}wq(){throw Fn.on("'null' is not supported by default")}xq(r){return this.vq(r)}yq(r){return this.vq(r)}zq(r){return this.vq(r)}ar(r){return this.vq(r)}br(r){return this.vq(r)}cr(r){return this.vq(r)}dr(r){return this.vq(r)}er(r){return this.vq(new Sn(r))}fr(r){return this.vq(r)}gr(r){return this}hr(r,e,t){this.uq(r,e)&&this.xq(t)}ir(r,e,t){this.uq(r,e)&&this.yq(t)}jr(r,e,t){this.uq(r,e)&&this.zq(t)}kr(r,e,t){this.uq(r,e)&&this.ar(t)}lr(r,e,t){this.uq(r,e)&&this.br(t)}mr(r,e,t){this.uq(r,e)&&this.cr(t)}nr(r,e,t){this.uq(r,e)&&this.dr(t)}or(r,e,t){this.uq(r,e)&&this.er(t)}pr(r,e){return this.uq(r,e)?this.gr(r.lo(e)):Dz()}qr(r,e,t,i){this.uq(r,e)&&this.rr(t,i)}}class ga{in(r,e){return r.pq().tr(this.hn(),e)}gn(r,e){return r.pq().ur(this.hn(),e)}}class h0{constructor(){q1=this,this.vr_1=Lz()}dn(){return this.vr_1}wr(r,e){throw Fn.on("'kotlin.Nothing' cannot be serialized")}en(r,e){var t;return t=g(),this.wr(r,t)}fn(r){throw Fn.on("'kotlin.Nothing' does not have instances")}}class d0{constructor(){O1=this,this.xr_1=new kn("kotlin.time.Duration",Na())}dn(){return this.xr_1}yr(r,e){r.fr(uS(e))}en(r,e){return this.yr(r,e instanceof xe?e.kj_1:g())}zr(r){return Wr().lj(r.yp())}fn(r){return new xe(this.zr(r))}}class p0{constructor(){j1=this,this.as_1=new kn("kotlin.time.Instant",Na())}dn(){return this.as_1}bs(r,e){r.fr(e.toString())}en(r,e){return this.bs(r,e instanceof rt?e:g())}fn(r){return xt().xj(r.yp())}}class _0{constructor(){U1=this,this.cs_1=new kn("kotlin.uuid.Uuid",Na())}dn(){return this.cs_1}ds(r,e){r.fr(e.toString())}en(r,e){return this.ds(r,e instanceof Et?e:g())}fn(r){return Ls().gl(r.yp())}}class Ut{constructor(r){this.gs_1=r,this.hs_1=1}do(){return Js()}go(){return this.hs_1}io(r){return yt(r,this.co()),r.toString()}jo(r){var e=Nl(r),t;if(e==null)t=null;else{var i;e>=0?i=e:i=null,t=i}var a=t;return a??-3}mo(r){return yt(r,this.co()),!1}ko(r){return yt(r,this.co()),dr()}lo(r){return yt(r,this.co()),this.gs_1}equals(r){return this===r?!0:r instanceof Ut?!!(P(this.gs_1,r.gs_1)&&this.co()===r.co()):!1}hashCode(){return Vr(Sr(this.gs_1),31)+se(this.co())|0}toString(){return this.co()+"("+b(this.gs_1)+")"}}class g0 extends Ut{co(){return"kotlin.collections.ArrayList"}}class Oi{constructor(r,e,t){this.is_1=r,this.js_1=e,this.ks_1=t,this.ls_1=2}co(){return this.is_1}do(){return Ql()}go(){return this.ls_1}io(r){return yt(r,this.co()),r.toString()}jo(r){var e=Nl(r),t;if(e==null)t=null;else{var i;e>=0?i=e:i=null,t=i}var a=t;return a??-3}mo(r){return yt(r,this.co()),!1}ko(r){return yt(r,this.co()),dr()}lo(r){yt(r,this.co());var e;switch(r%2|0){case 0:e=this.js_1;break;case 1:e=this.ks_1;break;default:var t="Unreached";throw xr.o3(b(t))}return e}equals(r){return this===r?!0:!(!(r instanceof Oi)||this.co()!==r.co()||!P(this.js_1,r.js_1)||!P(this.ks_1,r.ks_1))}hashCode(){var r=se(this.co());return r=Vr(31,r)+Sr(this.js_1)|0,r=Vr(31,r)+Sr(this.ks_1)|0,r}toString(){return this.co()+"("+b(this.js_1)+", "+b(this.ks_1)+")"}}class m0 extends Oi{constructor(r,e){super("kotlin.collections.LinkedHashMap",r,e)}}class y0 extends Ut{constructor(r){super(r),this.os_1=r.co()+"Array"}co(){return this.os_1}}class pf{it(r,e){var t=r.cq(this.dn()),i=t.sq(this.dn());if(!(i>=-1)){var a="Decoded collection size should be either non-negative, or -1 (meaning, unknown). Was: "+i;throw U.v(b(a))}var s;e!=null?s=this.xs(e,this.nt(e)+vn(i,0)|0):s=this.rs(i);var o=s,u=this.ts(o);if(t.qq())this.ft(t,o,u,i);else r:for(;;){var c=t.rq(this.dn());if(c===-1)break r;this.ht(t,u+c|0,o)}return t.dq(this.dn()),this.vs(o)}fn(r){return this.it(r,null)}ht(r,e,t,i,a){i=i===l?!0:i;var s;return a===l?(this.gt(r,e,t,i),s=or):s=a.gt.call(this,r,e,t,i),s}}class _f extends pf{constructor(r){super(),this.dt_1=r}et(r,e){var t=this.nt(e),i=this.dn(),a=r.sr(i,t),s=this.pt(e),o=0;if(o<t)do{var u=o;o=o+1|0,a.qr(this.dn(),u,this.dt_1,s.z())}while(o<t);a.dq(i)}en(r,e){return this.et(r,e)}ft(r,e,t,i){if(!(i>=0)){var a="Size must be known in advance when using READ_ALL";throw U.v(b(a))}var s=0;if(s<i)do{var o=s;s=s+1|0,this.gt(r,t+o|0,e,!1)}while(s<i)}gt(r,e,t,i){this.zs(t,e,r.oq(this.dn(),e,this.dt_1))}}class w0 extends _f{bt(r){return r.c1()}nt(r){return this.bt(r!=null&&E(r,W)?r:g())}ct(r){return r.x()}pt(r){return this.ct(r!=null&&E(r,W)?r:g())}}class b0 extends w0{constructor(r){super(r),this.qs_1=new g0(r.dn())}dn(){return this.qs_1}rs(r){return r===-1?T.m():T.g1(r)}ss(r){return r.c1()}ts(r){return this.ss(r instanceof T?r:g())}us(r){return r}vs(r){return this.us(r instanceof T?r:g())}ws(r,e){if(r instanceof T)return r.k6(e),r;if(e===r.c1())return T.f1(r);var t=T.g1(e);return t.h1(r),t}xs(r,e){return this.ws(r!=null&&E(r,En)?r:g(),e)}ys(r,e,t){r.l5(e,t)}zs(r,e,t){return this.ys(r instanceof T?r:g(),e,t)}}class k0 extends pf{constructor(r,e){super(),this.tt_1=r,this.ut_1=e}vt(r,e,t,i){if(!(i>=0)){var a="Size must be known in advance when using READ_ALL";throw U.v(b(a))}var s=Ub(Rc(0,Vr(i,2)),2),o=s.r1_1,u=s.s1_1,c=s.t1_1;if(c>0&&o<=u||c<0&&u<=o)do{var f=o;o=o+c|0,this.wt(r,t+f|0,e,!1)}while(f!==u)}ft(r,e,t,i){return this.vt(r,e!=null&&E(e,ca)?e:g(),t,i)}wt(r,e,t,i){var a=r.oq(this.dn(),e,this.tt_1),s;if(i){var o=r.rq(this.dn());if(o!==(e+1|0)){var u="Value must follow key in a map, index for key: "+e+", returned index for value: "+o;throw U.v(b(u))}s=o}else s=e+1|0;var c=s,f,v;if(t.m2(a)){var h=this.ut_1.dn().do();v=!(h instanceof Hn)}else v=!1;v?f=r.nq(this.dn(),c,this.ut_1,Se(t,a)):f=r.oq(this.dn(),c,this.ut_1);var d=f;t.s2(a,d)}gt(r,e,t,i){return this.wt(r,e,t!=null&&E(t,ca)?t:g(),i)}et(r,e){for(var t=this.nt(e),i=this.dn(),a=r.sr(i,t),s=this.pt(e),o=0,u=s;u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=this.dn(),d=o;o=d+1|0,a.qr(h,d,this.tt_1,f);var _=this.dn(),m=o;o=m+1|0,a.qr(_,m,this.ut_1,v)}a.dq(i)}en(r,e){return this.et(r,e)}}class x0 extends k0{constructor(r,e){super(r,e),this.lt_1=new m0(r.dn(),e.dn())}dn(){return this.lt_1}mt(r){return r.c1()}nt(r){return this.mt(r!=null&&E(r,mn)?r:g())}ot(r){return r.r2().x()}pt(r){return this.ot(r!=null&&E(r,mn)?r:g())}rs(r){return r===-1?vr.q4():wh(r)}qt(r){return Vr(r.c1(),2)}ts(r){return this.qt(r instanceof vr?r:g())}rt(r){return r}vs(r){return this.rt(r instanceof vr?r:g())}st(r,e){if(r instanceof vr)return r;if(e<=r.c1())return vr.ia(r);var t=wh(e);return t.u2(r),t}xs(r,e){return this.st(r!=null&&E(r,mn)?r:g(),e)}}class de extends _f{constructor(r){super(r),this.yt_1=new y0(r.dn())}dn(){return this.yt_1}zt(r){return r.au()}ts(r){return this.zt(r instanceof Dn?r:g())}bu(r){return r.cu()}vs(r){return this.bu(r instanceof Dn?r:g())}du(r){var e="This method lead to boxing and must not be used, use writeContents instead";throw xr.o3(b(e))}pt(r){return this.du(r)}eu(r,e,t){var i="This method lead to boxing and must not be used, use Builder.append instead";throw xr.o3(b(i))}zs(r,e,t){return this.eu(r instanceof Dn?r:g(),e,t)}rs(r){return r===-1?this.fu():this.gu(r)}ju(r,e){var t=this.nt(e),i=this.yt_1,a=r.sr(i,t);this.iu(a,e,t),a.dq(i)}en(r,e){return this.ju(r,e)}et(r,e){return this.ju(r,e)}fn(r){return this.it(r,null)}}class Dn{static ku(){return Ii(this)}mu(r,e){r=r===l?this.au()+1|0:r;var t;return e===l?(this.lu(r),t=or):t=e.lu.call(this,r),t}}let S0=class{constructor(){N1=this,this.nu_1=yi(0)}};class E0{constructor(r,e){bh(),this.ou_1=r,this.pu_1=e;var t=this.ou_1.go();if(t<=64){var i=this,a;t===64?a=new y(0,0):a=Vn(new y(-1,-1),t),i.qu_1=a,this.ru_1=bh().nu_1}else this.qu_1=new y(0,0),this.ru_1=qz(this,t)}su(r){r<64?this.qu_1=wi(this.qu_1,Vn(new y(1,0),r)):Oz(this,r)}tu(){for(var r=this.ou_1.go();!ir(this.qu_1,new y(-1,-1));){var e=__($c(this.qu_1));if(this.qu_1=wi(this.qu_1,Vn(new y(1,0),e)),this.pu_1(this.ou_1,e))return e}return r>64?jz(this):-1}}class ja{constructor(r,e,t){e=e===l?null:e,this.hv_1=r,this.iv_1=e,this.jv_1=t,this.kv_1=-1;for(var i=this,a=0,s=this.jv_1,o=Array(s);a<s;)o[a]="[UNINITIALIZED]",a=a+1|0;i.lv_1=o;var u=this,c=this.jv_1;u.mv_1=Array(c),this.nv_1=null,this.ov_1=wo(this.jv_1),this.pv_1=Tr();var f=this,v=vo();f.qv_1=lo(v,$z(this));var h=this,d=vo();h.rv_1=lo(d,Hz(this));var _=this,m=vo();_.sv_1=lo(m,Kz(this))}co(){return this.hv_1}go(){return this.jv_1}do(){return Xl()}ho(){var r=this.nv_1;return r??dr()}mp(){return this.pv_1.p2()}tv(){var r=this.rv_1,e=Si;return xa("typeParameterDescriptors",1,e,Gz(),null),r.l2()}lo(r){return la(gm(this),r).dn()}mo(r){return Em(this.ov_1,r)}ko(r){var e=la(this.mv_1,r);return e??dr()}io(r){return la(this.lv_1,r)}jo(r){var e=this.pv_1.o2(r);return e??-3}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof ja)){e=!1;break r}if(this.co()!==r.co()){e=!1;break r}if(!Yc(this.tv(),r.tv())){e=!1;break r}if(this.go()!==r.go()){e=!1;break r}var t=0,i=this.go();if(t<i)do{var a=t;if(t=t+1|0,this.lo(a).co()!==r.lo(a).co()){e=!1;break r}if(!P(this.lo(a).do(),r.lo(a).do())){e=!1;break r}}while(t<i);e=!0}return e}hashCode(){return mm(this)}toString(){return wm(this)}}class Yl extends ja{constructor(r,e){super(r,e,1),this.gv_1=!0}fo(){return this.gv_1}hashCode(){return Vr(super.hashCode(),31)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Yl)){e=!1;break r}if(this.co()!==r.co()){e=!1;break r}if(!(r.gv_1&&Yc(this.tv(),r.tv()))){e=!1;break r}if(this.go()!==r.go()){e=!1;break r}var t=0,i=this.go();if(t<i)do{var a=t;if(t=t+1|0,this.lo(a).co()!==r.lo(a).co()){e=!1;break r}if(!P(this.lo(a).do(),r.lo(a).do())){e=!1;break r}}while(t<i);e=!0}return e}}class z0{}function JE(){return bm()}class gf{constructor(r){this.uv_1=r}vv(){return[this.uv_1]}dn(){var r="unsupported";throw xr.o3(b(r))}en(r,e){var t="unsupported";throw xr.o3(b(t))}fn(r){var e="unsupported";throw xr.o3(b(e))}}class I0 extends Fs{constructor(){return new.target.yv()}static yv(){Wo=null;var r=this.tq();return Wo=r,r.xv_1=ru(),r}pq(){return this.xv_1}vq(r){return or}wq(){return or}xq(r){return or}yq(r){return or}zq(r){return or}ar(r){return or}br(r){return or}cr(r){return or}dr(r){return or}er(r){return or}fr(r){return or}}class $s{constructor(){D1=this,this.zv_1=zf(),this.aw_1="kotlin.Nothing"}do(){return this.zv_1}co(){return this.aw_1}go(){return 0}io(r){Va()}jo(r){Va()}mo(r){Va()}lo(r){Va()}ko(r){Va()}toString(){return"NothingSerialDescriptor"}equals(r){return this===r}hashCode(){return se(this.aw_1)+Vr(31,this.zv_1.hashCode())|0}}class C0{}class A0{constructor(r,e){this.bw_1=e,this.cw_1=dr();var t=this,i=vo();t.dw_1=lo(i,Mz(r,this))}dn(){var r=this.dw_1,e=Si;return xa("descriptor",1,e,Rz(),null),r.l2()}ew(r,e){r.cq(this.dn()).dq(this.dn())}en(r,e){return this.ew(r,e??g())}fn(r){var e=this.dn(),t=r.cq(e);r:{if(t.qq())break r;var i=t.rq(this.dn());if(i===-1)break r;throw Fn.on("Unexpected index "+i)}return t.dq(e),this.bw_1}}class T0 extends de{constructor(){Yo=null,super(lm(Fc())),Yo=this}hw(r){return r.length}nt(r){return this.hw(r!=null&&as(r)?r:g())}iw(r,e){return e===r.length?Ht.lw(r):Ht.mw(Qu(r,e),r.length)}xs(r,e){return this.iw(r!=null&&as(r)?r:g(),e)}gu(r){return Ht.nw(r)}fu(){return Ht.ow()}pw(r,e,t,i){t.qw(r.lq(this.yt_1,e))}gt(r,e,t,i){return this.pw(r,e,t instanceof Ht?t:g(),i)}hu(r,e,t,i){return this.pw(r,e,t instanceof Ht?t:g(),i)}rw(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.or(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.rw(r,e!=null&&as(e)?e:g(),t)}}class q0 extends de{constructor(){Zo=null,super(um()),Zo=this}uw(r){return r.length}nt(r){return this.uw(r!=null&&ls(r)?r:g())}vw(r,e){return e===r.length?Gt.yw(r):Gt.zw(r1(r,e),r.length)}xs(r,e){return this.vw(r!=null&&ls(r)?r:g(),e)}gu(r){return Gt.ax(r)}fu(){return Gt.bx()}cx(r,e,t,i){t.dx(r.kq(this.yt_1,e))}gt(r,e,t,i){return this.cx(r,e,t instanceof Gt?t:g(),i)}hu(r,e,t,i){return this.cx(r,e,t instanceof Gt?t:g(),i)}ex(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.nr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.ex(r,e!=null&&ls(e)?e:g(),t)}}class O0 extends de{constructor(){Vo=null,super(cm()),Vo=this}hx(r){return r.length}nt(r){return this.hx(r!=null&&os(r)?r:g())}ix(r,e){return e===r.length?Kt.lx(r):Kt.mx(n1(r,e),r.length)}xs(r,e){return this.ix(r!=null&&os(r)?r:g(),e)}gu(r){return Kt.nx(r)}fu(){return Kt.ox()}px(r,e,t,i){t.qx(r.jq(this.yt_1,e))}gt(r,e,t,i){return this.px(r,e,t instanceof Kt?t:g(),i)}hu(r,e,t,i){return this.px(r,e,t instanceof Kt?t:g(),i)}rx(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.mr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.rx(r,e!=null&&os(e)?e:g(),t)}}class j0 extends de{constructor(){Xo=null,super(xf(Il())),Xo=this}ux(r){return r.length}nt(r){return this.ux(r!=null&&ta(r)?r:g())}vx(r,e){return e===r.length?Wt.yx(r):Wt.zx(ha(r,e),r.length)}xs(r,e){return this.vx(r!=null&&ta(r)?r:g(),e)}gu(r){return Wt.ay(r)}fu(){return Wt.by()}cy(r,e,t,i){t.dy(r.iq(this.yt_1,e))}gt(r,e,t,i){return this.cy(r,e,t instanceof Wt?t:g(),i)}hu(r,e,t,i){return this.cy(r,e,t instanceof Wt?t:g(),i)}ey(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.lr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.ey(r,e!=null&&ta(e)?e:g(),t)}}class U0 extends de{constructor(){Qo=null,super(Zl(Ps())),Qo=this}hy(r){return pi(r)}nt(r){return this.hy(r instanceof ui?r.qm_1:g())}iy(r,e){if(e===pi(r))return Yt.ly(r);var t=ha(r,e);return Yt.my(t,pi(r))}xs(r,e){return this.iy(r instanceof ui?r.qm_1:g(),e)}gu(r){return Yt.ny(r)}fu(){return Yt.oy()}py(r,e,t,i){var a=r.mq(this.yt_1,e).up(),s=a;t.qy(s)}gt(r,e,t,i){return this.py(r,e,t instanceof Yt?t:g(),i)}hu(r,e,t,i){return this.py(r,e,t instanceof Yt?t:g(),i)}ry(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=dE(e,a),u=o;s.br(u)}while(i<t)}iu(r,e,t){return this.ry(r,e instanceof ui?e.qm_1:g(),t)}}class N0 extends de{constructor(){rl=null,super(kf()),rl=this}uy(r){return r.length}nt(r){return this.uy(r!=null&&ss(r)?r:g())}vy(r,e){return e===r.length?Zt.yy(r):Zt.zy(ki(r,e),r.length)}xs(r,e){return this.vy(r!=null&&ss(r)?r:g(),e)}gu(r){return Zt.az(r)}fu(){return Zt.bz()}cz(r,e,t,i){t.dz(r.hq(this.yt_1,e))}gt(r,e,t,i){return this.cz(r,e,t instanceof Zt?t:g(),i)}hu(r,e,t,i){return this.cz(r,e,t instanceof Zt?t:g(),i)}ez(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.kr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.ez(r,e!=null&&ss(e)?e:g(),t)}}class D0 extends de{constructor(){nl=null,super(yf(Fl())),nl=this}hz(r){return di(r)}nt(r){return this.hz(r instanceof li?r.fm_1:g())}iz(r,e){if(e===di(r))return Vt.lz(r);var t=ki(r,e);return Vt.mz(t,di(r))}xs(r,e){return this.iz(r instanceof li?r.fm_1:g(),e)}gu(r){return Vt.nz(r)}fu(){return Vt.oz()}pz(r,e,t,i){var a=r.mq(this.yt_1,e).tp(),s=a;t.qz(s)}gt(r,e,t,i){return this.pz(r,e,t instanceof Vt?t:g(),i)}hu(r,e,t,i){return this.pz(r,e,t instanceof Vt?t:g(),i)}rz(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=tE(e,a),u=o;s.ar(u)}while(i<t)}iu(r,e,t){return this.rz(r,e instanceof li?e.fm_1:g(),t)}}class L0 extends de{constructor(){el=null,super(Ef()),el=this}uz(r){return r.length}nt(r){return this.uz(r!=null&&is(r)?r:g())}vz(r,e){return e===r.length?Xt.yz(r):Xt.zz(da(r,e),r.length)}xs(r,e){return this.vz(r!=null&&is(r)?r:g(),e)}gu(r){return Xt.a10(r)}fu(){return Xt.b10()}c10(r,e,t,i){t.d10(r.gq(this.yt_1,e))}gt(r,e,t,i){return this.c10(r,e,t instanceof Xt?t:g(),i)}hu(r,e,t,i){return this.c10(r,e,t instanceof Xt?t:g(),i)}e10(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.jr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.e10(r,e!=null&&is(e)?e:g(),t)}}class P0 extends de{constructor(){tl=null,super(bf($l())),tl=this}h10(r){return _i(r)}nt(r){return this.h10(r instanceof ci?r.bn_1:g())}i10(r,e){if(e===_i(r))return Qt.l10(r);var t=da(r,e);return Qt.m10(t,_i(r))}xs(r,e){return this.i10(r instanceof ci?r.bn_1:g(),e)}gu(r){return Qt.n10(r)}fu(){return Qt.o10()}p10(r,e,t,i){var a=r.mq(this.yt_1,e).sp(),s=a;t.q10(s)}gt(r,e,t,i){return this.p10(r,e,t instanceof Qt?t:g(),i)}hu(r,e,t,i){return this.p10(r,e,t instanceof Qt?t:g(),i)}r10(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=SE(e,a),u=o;s.zq(u)}while(i<t)}iu(r,e,t){return this.r10(r,e instanceof ci?e.bn_1:g(),t)}}class M0 extends de{constructor(){il=null,super(Sf()),il=this}u10(r){return r.length}nt(r){return this.u10(r!=null&&ts(r)?r:g())}v10(r,e){return e===r.length?ri.y10(r):ri.z10(pa(r,e),r.length)}xs(r,e){return this.v10(r!=null&&ts(r)?r:g(),e)}gu(r){return ri.a11(r)}fu(){return ri.b11()}c11(r,e,t,i){t.d11(r.fq(this.yt_1,e))}gt(r,e,t,i){return this.c11(r,e,t instanceof ri?t:g(),i)}hu(r,e,t,i){return this.c11(r,e,t instanceof ri?t:g(),i)}e11(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.ir(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.e11(r,e!=null&&ts(e)?e:g(),t)}}class R0 extends de{constructor(){al=null,super(wf(Bl())),al=this}h11(r){return hi(r)}nt(r){return this.h11(r instanceof oi?r.ul_1:g())}i11(r,e){if(e===hi(r))return ni.l11(r);var t=pa(r,e);return ni.m11(t,hi(r))}xs(r,e){return this.i11(r instanceof oi?r.ul_1:g(),e)}gu(r){return ni.n11(r)}fu(){return ni.o11()}p11(r,e,t,i){var a=r.mq(this.yt_1,e).rp(),s=a;t.q11(s)}gt(r,e,t,i){return this.p11(r,e,t instanceof ni?t:g(),i)}hu(r,e,t,i){return this.p11(r,e,t instanceof ni?t:g(),i)}r11(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=KS(e,a),u=o;s.yq(u)}while(i<t)}iu(r,e,t){return this.r11(r,e instanceof oi?e.ul_1:g(),t)}}class B0 extends de{constructor(){sl=null,super(fm()),sl=this}u11(r){return r.length}nt(r){return this.u11(r!=null&&es(r)?r:g())}v11(r,e){return e===r.length?ei.y11(r):ei.z11(e1(r,e),r.length)}xs(r,e){return this.v11(r!=null&&es(r)?r:g(),e)}gu(r){return ei.a12(r)}fu(){return ei.b12()}c12(r,e,t,i){t.d12(r.eq(this.yt_1,e))}gt(r,e,t,i){return this.c12(r,e,t instanceof ei?t:g(),i)}hu(r,e,t,i){return this.c12(r,e,t instanceof ei?t:g(),i)}e12(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.hr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.e12(r,e!=null&&es(e)?e:g(),t)}}class Ht extends Dn{constructor(r,e){return new.target.mw(r,e)}static mw(r,e){var t=this.ku();return t.jw_1=r,t.kw_1=e,t}static lw(r){return this.mw(r,r.length)}static nw(r){return this.mw(ds(r),0)}static ow(){return this.mw(ds(10),0)}au(){return this.kw_1}lu(r){this.jw_1.length<r&&(this.jw_1=Qu(this.jw_1,vn(r,Vr(this.jw_1.length,2))))}qw(r){this.mu();var e=this.jw_1,t=this.kw_1;this.kw_1=t+1|0,e[t]=r}cu(){return Qu(this.jw_1,this.kw_1)}}class Gt extends Dn{constructor(r,e){return new.target.zw(r,e)}static zw(r,e){var t=this.ku();return t.ww_1=r,t.xw_1=e,t}static yw(r){return this.zw(r,r.length)}static ax(r){return this.zw(new Float64Array(r),0)}static bx(){return this.zw(new Float64Array(10),0)}au(){return this.xw_1}lu(r){this.ww_1.length<r&&(this.ww_1=r1(this.ww_1,vn(r,Vr(this.ww_1.length,2))))}dx(r){this.mu();var e=this.ww_1,t=this.xw_1;this.xw_1=t+1|0,e[t]=r}cu(){return r1(this.ww_1,this.xw_1)}}class Kt extends Dn{constructor(r,e){return new.target.mx(r,e)}static mx(r,e){var t=this.ku();return t.jx_1=r,t.kx_1=e,t}static lx(r){return this.mx(r,r.length)}static nx(r){return this.mx(new Float32Array(r),0)}static ox(){return this.mx(new Float32Array(10),0)}au(){return this.kx_1}lu(r){this.jx_1.length<r&&(this.jx_1=n1(this.jx_1,vn(r,Vr(this.jx_1.length,2))))}qx(r){this.mu();var e=this.jx_1,t=this.kx_1;this.kx_1=t+1|0,e[t]=r}cu(){return n1(this.jx_1,this.kx_1)}}class Wt extends Dn{constructor(r,e){return new.target.zx(r,e)}static zx(r,e){var t=this.ku();return t.wx_1=r,t.xx_1=e,t}static yx(r){return this.zx(r,r.length)}static ay(r){return this.zx(yi(r),0)}static by(){return this.zx(yi(10),0)}au(){return this.xx_1}lu(r){this.wx_1.length<r&&(this.wx_1=ha(this.wx_1,vn(r,Vr(this.wx_1.length,2))))}dy(r){this.mu();var e=this.wx_1,t=this.xx_1;this.xx_1=t+1|0,e[t]=r}cu(){return ha(this.wx_1,this.xx_1)}}class Yt extends Dn{constructor(r,e){return new.target.my(r,e)}static my(r,e){var t=this.ku();return t.jy_1=r,t.ky_1=e,t}static ly(r){return this.my(r,pi(r))}static ny(r){return this.my(mh(r),0)}static oy(){return this.my(mh(10),0)}au(){return this.ky_1}lu(r){if(pi(this.jy_1)<r){var e=this,t=this.jy_1,i=vn(r,Vr(pi(this.jy_1),2));e.jy_1=ha(t,i)}}qy(r){this.mu();var e=this.jy_1,t=this.ky_1;this.ky_1=t+1|0,pE(e,t,r)}f12(){var r=this.jy_1,e=this.ky_1;return ha(r,e)}cu(){return new ui(this.f12())}}class Zt extends Dn{constructor(r,e){return new.target.zy(r,e)}static zy(r,e){var t=this.ku();return t.wy_1=r,t.xy_1=e,t}static yy(r){return this.zy(r,r.length)}static az(r){return this.zy(new Int32Array(r),0)}static bz(){return this.zy(new Int32Array(10),0)}au(){return this.xy_1}lu(r){this.wy_1.length<r&&(this.wy_1=ki(this.wy_1,vn(r,Vr(this.wy_1.length,2))))}dz(r){this.mu();var e=this.wy_1,t=this.xy_1;this.xy_1=t+1|0,e[t]=r}cu(){return ki(this.wy_1,this.xy_1)}}class Vt extends Dn{constructor(r,e){return new.target.mz(r,e)}static mz(r,e){var t=this.ku();return t.jz_1=r,t.kz_1=e,t}static lz(r){return this.mz(r,di(r))}static nz(r){return this.mz(gh(r),0)}static oz(){return this.mz(gh(10),0)}au(){return this.kz_1}lu(r){if(di(this.jz_1)<r){var e=this,t=this.jz_1,i=vn(r,Vr(di(this.jz_1),2));e.jz_1=ki(t,i)}}qz(r){this.mu();var e=this.jz_1,t=this.kz_1;this.kz_1=t+1|0,iE(e,t,r)}g12(){var r=this.jz_1,e=this.kz_1;return ki(r,e)}cu(){return new li(this.g12())}}class Xt extends Dn{constructor(r,e){return new.target.zz(r,e)}static zz(r,e){var t=this.ku();return t.wz_1=r,t.xz_1=e,t}static yz(r){return this.zz(r,r.length)}static a10(r){return this.zz(new Int16Array(r),0)}static b10(){return this.zz(new Int16Array(10),0)}au(){return this.xz_1}lu(r){this.wz_1.length<r&&(this.wz_1=da(this.wz_1,vn(r,Vr(this.wz_1.length,2))))}d10(r){this.mu();var e=this.wz_1,t=this.xz_1;this.xz_1=t+1|0,e[t]=r}cu(){return da(this.wz_1,this.xz_1)}}class Qt extends Dn{constructor(r,e){return new.target.m10(r,e)}static m10(r,e){var t=this.ku();return t.j10_1=r,t.k10_1=e,t}static l10(r){return this.m10(r,_i(r))}static n10(r){return this.m10(yh(r),0)}static o10(){return this.m10(yh(10),0)}au(){return this.k10_1}lu(r){if(_i(this.j10_1)<r){var e=this,t=this.j10_1,i=vn(r,Vr(_i(this.j10_1),2));e.j10_1=da(t,i)}}q10(r){this.mu();var e=this.j10_1,t=this.k10_1;this.k10_1=t+1|0,EE(e,t,r)}h12(){var r=this.j10_1,e=this.k10_1;return da(r,e)}cu(){return new ci(this.h12())}}class ri extends Dn{constructor(r,e){return new.target.z10(r,e)}static z10(r,e){var t=this.ku();return t.w10_1=r,t.x10_1=e,t}static y10(r){return this.z10(r,r.length)}static a11(r){return this.z10(new Int8Array(r),0)}static b11(){return this.z10(new Int8Array(10),0)}au(){return this.x10_1}lu(r){this.w10_1.length<r&&(this.w10_1=pa(this.w10_1,vn(r,Vr(this.w10_1.length,2))))}d11(r){this.mu();var e=this.w10_1,t=this.x10_1;this.x10_1=t+1|0,e[t]=r}cu(){return pa(this.w10_1,this.x10_1)}}class ni extends Dn{constructor(r,e){return new.target.m11(r,e)}static m11(r,e){var t=this.ku();return t.j11_1=r,t.k11_1=e,t}static l11(r){return this.m11(r,hi(r))}static n11(r){return this.m11(_h(r),0)}static o11(){return this.m11(_h(10),0)}au(){return this.k11_1}lu(r){if(hi(this.j11_1)<r){var e=this,t=this.j11_1,i=vn(r,Vr(hi(this.j11_1),2));e.j11_1=pa(t,i)}}q11(r){this.mu();var e=this.j11_1,t=this.k11_1;this.k11_1=t+1|0,WS(e,t,r)}i12(){var r=this.j11_1,e=this.k11_1;return pa(r,e)}cu(){return new oi(this.i12())}}class ei extends Dn{constructor(r,e){return new.target.z11(r,e)}static z11(r,e){var t=this.ku();return t.w11_1=r,t.x11_1=e,t}static y11(r){return this.z11(r,r.length)}static a12(r){return this.z11(wo(r),0)}static b12(){return this.z11(wo(10),0)}au(){return this.x11_1}lu(r){this.w11_1.length<r&&(this.w11_1=e1(this.w11_1,vn(r,Vr(this.w11_1.length,2))))}d12(r){this.mu();var e=this.w11_1,t=this.x11_1;this.x11_1=t+1|0,e[t]=r}cu(){return e1(this.w11_1,this.x11_1)}}class F0{constructor(){P1=this,this.j12_1=new kn("kotlin.String",Na())}dn(){return this.j12_1}k12(r,e){return r.fr(e)}en(r,e){return this.k12(r,e!=null&&typeof e=="string"?e:g())}fn(r){return r.yp()}}class kn{constructor(r,e){this.l12_1=r,this.m12_1=e}co(){return this.l12_1}do(){return this.m12_1}go(){return 0}io(r){Xa(this)}jo(r){Xa(this)}mo(r){Xa(this)}lo(r){Xa(this)}ko(r){Xa(this)}toString(){return"PrimitiveDescriptor("+this.l12_1+")"}equals(r){return this===r?!0:r instanceof kn?!!(this.l12_1===r.l12_1&&P(this.m12_1,r.m12_1)):!1}hashCode(){return se(this.l12_1)+Vr(31,this.m12_1.hashCode())|0}}class $0{constructor(){M1=this,this.n12_1=new kn("kotlin.Int",bz())}dn(){return this.n12_1}o12(r,e){return r.ar(e)}en(r,e){return this.o12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.tp()}}class J0{constructor(){R1=this,this.p12_1=new kn("kotlin.Long",kz())}dn(){return this.p12_1}q12(r,e){return r.br(e)}en(r,e){return this.q12(r,e instanceof y?e:g())}fn(r){return r.up()}}class H0{constructor(){B1=this,this.r12_1=new kn("kotlin.Byte",mz())}dn(){return this.r12_1}s12(r,e){return r.yq(e)}en(r,e){return this.s12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.rp()}}class G0{constructor(){F1=this,this.t12_1=new kn("kotlin.Short",wz())}dn(){return this.t12_1}u12(r,e){return r.zq(e)}en(r,e){return this.u12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.sp()}}class K0{constructor(){$1=this,this.v12_1=new kn("kotlin.Char",yz())}dn(){return this.v12_1}w12(r,e){return r.er(e)}en(r,e){return this.w12(r,e instanceof Sn?e.x1_1:g())}x12(r){return r.xp()}fn(r){return new Sn(this.x12(r))}}class W0{constructor(){J1=this,this.y12_1=new kn("kotlin.Double",Sz())}dn(){return this.y12_1}z12(r,e){return r.dr(e)}en(r,e){return this.z12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.wp()}}class Y0{constructor(){H1=this,this.a13_1=new kn("kotlin.Float",xz())}dn(){return this.a13_1}b13(r,e){return r.cr(e)}en(r,e){return this.b13(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.vp()}}class Z0{constructor(){G1=this,this.c13_1=new kn("kotlin.Boolean",gz())}dn(){return this.c13_1}d13(r,e){return r.xq(e)}en(r,e){return this.d13(r,e!=null&&typeof e=="boolean"?e:g())}fn(r){return r.qp()}}class V0{constructor(){K1=this,this.e13_1=new A0("kotlin.Unit",or)}dn(){return this.e13_1.dn()}f13(r,e){this.e13_1.ew(r,or)}en(r,e){return this.f13(r,e instanceof wl?e:g())}g13(r){this.e13_1.fn(r)}fn(r){return this.g13(r),or}}class Ua{constructor(){var r=this;r.m13_1=T.m(),this.n13_1=!1}pq(){return ru()}r13(r){throw Fn.on(b(Dr(this))+" can't retrieve untyped values")}s13(r){return!0}t13(r){var e=this.r13(r);return typeof e=="boolean"?e:g()}u13(r){var e=this.r13(r);return typeof e=="number"?e:g()}v13(r){var e=this.r13(r);return typeof e=="number"?e:g()}w13(r){var e=this.r13(r);return typeof e=="number"?e:g()}x13(r){var e=this.r13(r);return e instanceof y?e:g()}y13(r){var e=this.r13(r);return typeof e=="number"?e:g()}z13(r){var e=this.r13(r);return typeof e=="number"?e:g()}a14(r){var e=this.r13(r);return e instanceof Sn?e.x1_1:g()}b14(r){var e=this.r13(r);return typeof e=="string"?e:g()}c14(r,e){return this.d14(r),this}aq(r,e){return this.bq(r)}zp(r){return this.c14(this.e14(),r)}op(){var r=this.o13(),e;if(r==null)return!1;e=r;var t=e;return this.s13(t)}pp(){return null}qp(){return this.t13(this.e14())}rp(){return this.u13(this.e14())}sp(){return this.v13(this.e14())}tp(){return this.w13(this.e14())}up(){return this.x13(this.e14())}vp(){return this.y13(this.e14())}wp(){return this.z13(this.e14())}xp(){return this.a14(this.e14())}yp(){return this.b14(this.e14())}cq(r){return this}dq(r){}eq(r,e){return this.t13(this.j13(r,e))}fq(r,e){return this.u13(this.j13(r,e))}gq(r,e){return this.v13(this.j13(r,e))}hq(r,e){return this.w13(this.j13(r,e))}iq(r,e){return this.x13(this.j13(r,e))}jq(r,e){return this.y13(this.j13(r,e))}kq(r,e){return this.z13(this.j13(r,e))}lq(r,e){return this.a14(this.j13(r,e))}mq(r,e){return this.c14(this.j13(r,e),r.lo(e))}nq(r,e,t,i){var a=this.j13(r,e);return kI(this,a,xI(this,t,i))}o13(){return Mp(this.m13_1)}d14(r){this.m13_1.n(r)}e14(){var r=this.m13_1.e5(Ns(this.m13_1));return this.n13_1=!0,r}}class X0 extends Ua{j13(r,e){return this.l13(this.k13(r,e))}l13(r){var e=this.o13();return this.p13(e??"",r)}k13(r,e){return r.io(e)}p13(r,e){var t;return C(r)===0?t=e:t=r+"."+e,t}q13(){return this.m13_1.i1()?"$":V(this.m13_1,".","$.")}}class Q0{constructor(){W1=this,this.f14_1=Hs("kotlin.UInt",kf())}dn(){return this.f14_1}g14(r,e){var t=r.gr(this.f14_1),i=e;t.ar(i)}en(r,e){return this.g14(r,e instanceof Xn?e.am_1:g())}h14(r){var e=r.zp(this.f14_1).tp();return e}fn(r){return new Xn(this.h14(r))}}class rm{constructor(){Y1=this,this.i14_1=Hs("kotlin.ULong",xf(Il()))}dn(){return this.i14_1}j14(r,e){var t=r.gr(this.i14_1),i=e;t.br(i)}en(r,e){return this.j14(r,e instanceof Qn?e.lm_1:g())}k14(r){var e=r.zp(this.i14_1).up();return e}fn(r){return new Qn(this.k14(r))}}class nm{constructor(){Z1=this,this.l14_1=Hs("kotlin.UByte",Sf())}dn(){return this.l14_1}m14(r,e){var t=r.gr(this.l14_1),i=e;t.yq(i)}en(r,e){return this.m14(r,e instanceof Re?e.pl_1:g())}n14(r){var e=r.zp(this.l14_1).rp();return e}fn(r){return new Re(this.n14(r))}}class em{constructor(){V1=this,this.o14_1=Hs("kotlin.UShort",Ef())}dn(){return this.o14_1}p14(r,e){var t=r.gr(this.o14_1),i=e;t.zq(i)}en(r,e){return this.p14(r,e instanceof Be?e.wm_1:g())}q14(r){var e=r.zp(this.o14_1).sp();return e}fn(r){return new Be(this.q14(r))}}class tm{zn(r,e,t){return e=e===l?dr():e,t===l?this.r14(r,e):t.r14.call(this,r,e)}}class im extends tm{constructor(r,e,t,i,a,s){super(),this.t14_1=r,this.u14_1=e,this.v14_1=t,this.w14_1=i,this.x14_1=a,this.y14_1=s}ur(r,e){if(!r.pc(e))return null;var t=this.u14_1.o2(r),i=t==null?null:t.o2(Dr(e)),a=i!=null&&E(i,Jl)?i:null;if(a!=null)return a;var s=this.v14_1.o2(r),o=s!=null&&typeof s=="function"?s:null;return o==null?null:o(e)}tr(r,e){var t=this.w14_1.o2(r),i;t==null?i=null:i=(E(t,mn)?t:g()).o2(e);var a=i,s=a!=null&&E(a,cr)?a:null;if(s!=null)return s;var o=this.x14_1.o2(r),u=o!=null&&typeof o=="function"?o:null;return u==null?null:u(e)}r14(r,e){var t=this.t14_1.o2(r),i=t==null?null:t.z14(e);return i==null||E(i,cr)?i:null}s14(r){for(var e=this.t14_1.r2().x();e.y();){var t=e.z(),i=t.k2(),a=t.l2();if(a instanceof am){var s=E(i,Ke)?i:g(),o=a.c15_1;r.d15(s,E(o,cr)?o:g())}else a instanceof sm?r.b15(i,a.a15_1):Ts()}for(var u=this.u14_1.r2().x();u.y();)for(var c=u.z(),f=c.k2(),v=c.l2(),h=v.r2().x();h.y();){var d=h.z(),_=d.k2(),m=d.l2(),w=E(f,Ke)?f:g(),x=E(_,Ke)?_:g(),k=E(m,cr)?m:g();r.e15(w,x,k)}for(var S=this.v14_1.r2().x();S.y();){var z=S.z(),I=z.k2(),A=z.l2(),q=E(I,Ke)?I:g();r.f15(q,typeof A=="function"?A:g())}for(var N=this.x14_1.r2().x();N.y();){var $=N.z(),O=$.k2(),L=$.l2(),H=E(O,Ke)?O:g();r.g15(H,typeof L=="function"?L:g())}}}class mf{}class am extends mf{}class sm extends mf{}class om{}function HE(n,r){return this.b15(n,TI(r))}class GE{}function KE(n,r,e){var t=n.gn(r,e),i;return t==null?zz(Dr(e),n.hn()):i=t,i}function C1(n,r,e){var t=n.in(r,e),i;return t==null?pm(e,n.hn()):i=t,i}function Tu(n){cn(n,n.mn_1)}function bs(n){return cI()}function yf(n){return SI()}function Zl(n){return EI()}function wf(n){return zI()}function bf(n){return II()}function kf(n){return fI()}function xf(n){return vI()}function Sf(n){return hI()}function Ef(n){return dI()}function lm(n){return pI()}function WE(){return Vz()}function um(n){return _I()}function YE(){return Xz()}function cm(n){return gI()}function ZE(){return Qz()}function VE(){return rI()}function XE(){return nI()}function QE(){return eI()}function rz(){return tI()}function nz(){return iI()}function ez(){return aI()}function tz(){return sI()}function iz(){return oI()}function fm(n){return mI()}function az(){return lI()}function sz(n){return yI()}function oz(){return Iz()}function lz(n){return Cz()}function uz(n){return Az()}function cz(n){return Tz()}function A1(n){return new b0(n)}function T1(n,r){return new x0(n,r)}function fz(n,r){var e=vm(r),t;if(e==null)t=null;else{var i=n.zn(e);t=i==null?null:i.dn()}return t}function vm(n){var r;return n instanceof Jg?r=n.bo_1:n instanceof C0?r=vm(n.ao_1):r=null,r}function vz(n){return new Gg(n)}function Vl(n,r,e,t){var i;if(t===l?i=_z:i=t,t=i,lt(n)){var a="Blank serial names are prohibited";throw U.v(b(a))}if(P(r,Xl())){var s="For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";throw U.v(b(s))}var o=new Kg(n);return t(o),new Ta(n,r,o.to_1.c1(),hb(e),o)}function hm(n){var r=n.lp_1,e=Si;return xa("_hashCode",1,e,dz(),null),r.l2()}function hz(n){return()=>ym(n,n.kp_1)}function dz(){return Fe(n=>hm(n),1,0,0)}function pz(n,r){if(lt(n)){var e="Blank serial names are prohibited";throw U.v(b(e))}return wI(n,r)}function _z(n){return or}var Oo;function ji(){return Oo===l&&new Gl,Oo}var jo;function dm(){return jo===l&&new Wg,jo}var Uo;function Xl(){return Uo===l&&new Yg,Uo}var No;function Js(){return No===l&&new Zg,No}var Do;function Ql(){return Do===l&&new Vg,Do}var Lo;function zf(){return Lo===l&&new Xg,Lo}var Po;function gz(){return Po===l&&new Qg,Po}var Mo;function mz(){return Mo===l&&new r0,Mo}var Ro;function yz(){return Ro===l&&new n0,Ro}var Bo;function wz(){return Bo===l&&new e0,Bo}var Fo;function bz(){return Fo===l&&new t0,Fo}var $o;function kz(){return $o===l&&new i0,$o}var Jo;function xz(){return Jo===l&&new a0,Jo}var Ho;function Sz(){return Ho===l&&new s0,Ho}var Go;function Na(){return Go===l&&new o0,Go}var Ko;function Ez(){return Ko===l&&new l0,Ko}function zz(n,r){var e=n.oc();pm(e??b(n),r)}function pm(n,r){var e="in the polymorphic scope of '"+r.oc()+"'";throw Fn.on(n==null?"Class discriminator was missing and no default serializers were registered "+e+".":"Serializer for subclass '"+n+"' is not found "+e+`.
`+("Check if class with serial name '"+n+`' exists and serializer is registered in a corresponding SerializersModule.
`)+("To be registered automatically, class '"+n+"' has to be '@Serializable', and the base class '"+r.oc()+"' has to be sealed and '@Serializable'."))}var q1;function Iz(){return q1===l&&new h0,q1}var O1;function Cz(){return O1===l&&new d0,O1}var j1;function Az(){return j1===l&&new p0,j1}var U1;function Tz(){return U1===l&&new _0,U1}function yt(n,r){if(n<0)throw Wn.tb("Illegal index "+n+", "+r+" expects only non-negative indices")}function wh(n){var r=n;return vr.ha(r)}var N1;function bh(){return N1===l&&new S0,N1}function qz(n,r){var e=(r-1|0)>>>6|0,t=r&63,i=yi(e);return t!==0&&(i[cb(i)]=Vn(new y(-1,-1),r)),i}function Oz(n,r){var e=(r>>>6|0)-1|0,t=r&63;n.ru_1[e]=wi(n.ru_1[e],Vn(new y(1,0),t))}function jz(n){var r=0,e=n.ru_1.length-1|0;if(r<=e)do{var t=r;r=r+1|0;for(var i=Vr(t+1|0,64),a=n.ru_1[t];!ir(a,new y(-1,-1));){var s=__($c(a));a=wi(a,Vn(new y(1,0),s));var o=i+s|0;if(n.pu_1(n.ou_1,o))return n.ru_1[t]=a,o}n.ru_1[t]=a}while(r<=e);return-1}function Hs(n,r){return new Yl(n,new gf(r))}function Uz(n,r){return n.yn(r)}function Nz(n){return Fz(n)}var Wo;function Dz(){return Wo===l&&I0.yv(),Wo}function Va(n){throw xr.o3("Descriptor for type `kotlin.Nothing` does not have elements")}var D1;function Lz(){return D1===l&&new $s,D1}function Pz(n){return r=>(r.so_1=n.cw_1,or)}function Mz(n,r){return()=>{var e=zf();return Vl(n,e,[],Pz(r))}}function Rz(){return Fe(n=>n.dn(),1,0,1)}function Bz(){return If(),_m}var _m;function Fz(n){if(If(),E(n,Rs))return n.mp();var r=gi.b1(n.go()),e=0,t=n.go();if(e<t)do{var i=e;e=e+1|0;var a=n.io(i);r.n(a)}while(e<t);return r}function L1(n){If();var r;n==null||n.i1()?r=null:r=n;var e=r,t;e==null?t=null:t=xi(e);var i=t;return i??Bz()}var kh;function If(){kh||(kh=!0,_m=[])}function gm(n){var r=n.qv_1,e=Si;return xa("childSerializers",1,e,Jz(),null),r.l2()}function mm(n){var r=n.sv_1,e=Si;return xa("_hashCode",1,e,Wz(),null),r.l2()}function $z(n){return()=>{var r=n.iv_1,e=r==null?null:r.vv();return e??bm()}}function Jz(){return Fe(n=>gm(n),1,0,2)}function Hz(n){return()=>{var r=n.iv_1,e=r==null?null:r.wv(),t;if(e==null)t=null;else{for(var i=T.g1(e.length),a=0,s=e.length;a<s;){var o=e[a];a=a+1|0;var u=o.dn();i.n(u)}t=i}return L1(t)}}function Gz(){return Fe(n=>n.tv(),1,0,3)}function Kz(n){return()=>ym(n,n.tv())}function Wz(){return Fe(n=>mm(n),1,0,4)}function ym(n,r){var e=se(n.co());e=Vr(31,e)+zk(r)|0;for(var t=vz(n),i=1,a=t.x();a.y();){var s=a.z(),o=i,u=Vr(31,o),c=s.co(),f=c==null?null:Sr(c);i=u+(f??0)|0}for(var v=i,h=1,d=t.x();d.y();){var _=d.z(),m=h,w=Vr(31,m),x=_.do(),k=x==null?null:Sr(x);h=w+(k??0)|0}var S=h;return e=Vr(31,e)+v|0,e=Vr(31,e)+S|0,e}function wm(n){var r=Rc(0,n.go()),e=n.co()+"(";return V(r,", ",e,")",l,l,Yz(n))}function Yz(n){return r=>n.io(r)+": "+n.lo(r).co()}function bm(){return Zz(),km}var km,xh;function Zz(){xh||(xh=!0,km=[])}var Yo;function Vz(){return Yo===l&&new T0,Yo}var Zo;function Xz(){return Zo===l&&new q0,Zo}var Vo;function Qz(){return Vo===l&&new O0,Vo}var Xo;function rI(){return Xo===l&&new j0,Xo}var Qo;function nI(){return Qo===l&&new U0,Qo}var rl;function eI(){return rl===l&&new N0,rl}var nl;function tI(){return nl===l&&new D0,nl}var el;function iI(){return el===l&&new L0,el}var tl;function aI(){return tl===l&&new P0,tl}var il;function sI(){return il===l&&new M0,il}var al;function oI(){return al===l&&new R0,al}var sl;function lI(){return sl===l&&new B0,sl}function uI(){return Cf(),xm}var xm,P1;function cI(){return P1===l&&new F0,P1}function Xa(n){throw xr.o3("Primitive descriptor "+n.l12_1+" does not have elements")}var M1;function fI(){return M1===l&&new $0,M1}var R1;function vI(){return R1===l&&new J0,R1}var B1;function hI(){return B1===l&&new H0,B1}var F1;function dI(){return F1===l&&new G0,F1}var $1;function pI(){return $1===l&&new K0,$1}var J1;function _I(){return J1===l&&new W0,J1}var H1;function gI(){return H1===l&&new Y0,H1}var G1;function mI(){return G1===l&&new Z0,G1}var K1;function yI(){return K1===l&&new V0,K1}function wI(n,r){return Cf(),bI(n),new kn(n,r)}function bI(n){Cf();for(var r=uI().q2(),e=r.x();e.y();){var t=e.z(),i=t.dn().co();if(n===i)throw U.v(j2(`
                The name of serial descriptor should uniquely identify associated serializer.
                For serial name `+n+" there already exists "+Dr(t).oc()+`.
                Please refer to SerialDescriptor documentation for additional information.
            `))}}var Sh;function Cf(){Sh||(Sh=!0,xm=qI())}function kI(n,r,e){n.d14(r);var t=e();return n.n13_1||n.e14(),n.n13_1=!1,t}function xI(n,r,e){return()=>n.aq(r,e)}var W1;function SI(){return W1===l&&new Q0,W1}var Y1;function EI(){return Y1===l&&new rm,Y1}var Z1;function zI(){return Z1===l&&new nm,Z1}var V1;function II(){return V1===l&&new em,V1}function CI(){return AI(),Sm}var Sm,Eh;function AI(){Eh||(Eh=!0,Sm=new im(Tr(),Tr(),Tr(),Tr(),Tr(),!1))}function ru(){return CI()}function TI(n){return r=>n}function la(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Wn.tb("Index "+r+" out of bounds "+rb(n).toString());return n[r]}function Em(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Wn.tb("Index "+r+" out of bounds "+vb(n).toString());return n[r]}function qI(){return Ol([j(kr().id(),bs()),j(Nr(Sn),lm(Fc())),j(kr().ld(),WE()),j(kr().gd(),um()),j(kr().sd(),YE()),j(kr().fd(),cm()),j(kr().rd(),ZE()),j(kr().ed(),xf(Il())),j(kr().qd(),VE()),j(Nr(Qn),Zl(Ps())),j(Nr(ui),XE()),j(kr().dd(),kf()),j(kr().od(),QE()),j(Nr(Xn),yf(Fl())),j(Nr(li),rz()),j(kr().cd(),Ef()),j(kr().nd(),nz()),j(Nr(Be),bf($l())),j(Nr(ci),ez()),j(kr().bd(),Sf()),j(kr().md(),tz()),j(Nr(Re),wf(Bl())),j(Nr(oi),iz()),j(kr().ad(),fm()),j(kr().kd(),az()),j(Nr(wl),sz()),j(kr().zc(),oz()),j(Nr(xe),lz(Wr())),j(Nr(rt),uz(xt())),j(Nr(Et),cz(Ls()))])}Mr(Jl,"SerializationStrategy");Mr(oa,"DeserializationStrategy");Mr(cr,"KSerializer",l,l,[Jl,oa]);p(Fn,"SerializationException",Fn.nn);p(Hl,"MissingFieldException");Mr(he,"SerialDescriptor");p(Jg,"ContextDescriptor",l,l,[he]);p(Hg);p(Gg);p(Kg,"ClassSerialDescriptorBuilder");Mr(Rs,"CachedNames");Lr(Ta).eo=Ai;Lr(Ta).fo=Ti;p(Ta,"SerialDescriptorImpl",l,l,[he,Rs]);p(qa,"SerialKind");D(Gl,"ENUM");D(Wg,"CONTEXTUAL");p(Bs,"StructureKind");D(Yg,"CLASS");D(Zg,"LIST");D(Vg,"MAP");D(Xg,"OBJECT");p(Hn,"PrimitiveKind");D(Qg,"BOOLEAN");D(r0,"BYTE");D(n0,"CHAR");D(e0,"SHORT");D(t0,"INT");D(i0,"LONG");D(a0,"FLOAT");D(s0,"DOUBLE");D(o0,"STRING");p(Oa,"PolymorphicKind");D(l0,"SEALED");Mr(Kl,"Decoder");Mr(Wl,"CompositeDecoder");Lr(qi).oq=v0;Lr(qi).bq=u0;Lr(qi).qq=c0;Lr(qi).sq=f0;p(qi,"AbstractDecoder",l,l,[Kl,Wl]);Mr(df,"Encoder");Lr(Fs).sr=FE;Lr(Fs).rr=$E;p(Fs,"AbstractEncoder",l,l,[df]);p(ga,"AbstractPolymorphicSerializer",l,l,[cr]);D(h0,"NothingSerializer",l,l,[cr]);D(d0,"DurationSerializer",l,l,[cr]);D(p0,"InstantSerializer",l,l,[cr]);D(_0,"UuidSerializer",l,l,[cr]);Lr(Ut).eo=Ai;Lr(Ut).fo=Ti;Lr(Ut).ho=Ms;p(Ut,"ListLikeDescriptor",l,l,[he]);p(g0,"ArrayListClassDesc");Lr(Oi).eo=Ai;Lr(Oi).fo=Ti;Lr(Oi).ho=Ms;p(Oi,"MapLikeDescriptor",l,l,[he]);p(m0,"LinkedHashMapClassDesc");p(y0,"PrimitiveArrayDescriptor");p(pf,"AbstractCollectionSerializer",l,l,[cr]);p(_f,"CollectionLikeSerializer");p(w0,"CollectionSerializer");p(b0,"ArrayListSerializer");p(k0,"MapLikeSerializer");p(x0,"LinkedHashMapSerializer");p(de,"PrimitiveArraySerializer");p(Dn,"PrimitiveArrayBuilder");Qr(S0);p(E0,"ElementMarker");Lr(ja).eo=Ai;Lr(ja).fo=Ti;p(ja,"PluginGeneratedSerialDescriptor",l,l,[he,Rs]);p(Yl,"InlineClassDescriptor");Mr(z0,"GeneratedSerializer",l,l,[cr]);Lr(gf).wv=JE;p(gf,l,l,l,[z0]);D(I0,"NoOpEncoder");Lr($s).eo=Ai;Lr($s).fo=Ti;Lr($s).ho=Ms;D($s,"NothingSerialDescriptor",l,l,[he]);p(C0,"SerialDescriptorForNullable",l,l,[he,Rs]);p(A0,"ObjectSerializer",l,l,[cr]);D(T0,"CharArraySerializer",l,l,[cr]);D(q0,"DoubleArraySerializer",l,l,[cr]);D(O0,"FloatArraySerializer",l,l,[cr]);D(j0,"LongArraySerializer",l,l,[cr]);D(U0,"ULongArraySerializer",l,l,[cr]);D(N0,"IntArraySerializer",l,l,[cr]);D(D0,"UIntArraySerializer",l,l,[cr]);D(L0,"ShortArraySerializer",l,l,[cr]);D(P0,"UShortArraySerializer",l,l,[cr]);D(M0,"ByteArraySerializer",l,l,[cr]);D(R0,"UByteArraySerializer",l,l,[cr]);D(B0,"BooleanArraySerializer",l,l,[cr]);p(Ht,"CharArrayBuilder");p(Gt,"DoubleArrayBuilder");p(Kt,"FloatArrayBuilder");p(Wt,"LongArrayBuilder");p(Yt,"ULongArrayBuilder");p(Zt,"IntArrayBuilder");p(Vt,"UIntArrayBuilder");p(Xt,"ShortArrayBuilder");p(Qt,"UShortArrayBuilder");p(ri,"ByteArrayBuilder");p(ni,"UByteArrayBuilder");p(ei,"BooleanArrayBuilder");D(F0,"StringSerializer",l,l,[cr]);Lr(kn).eo=Ai;Lr(kn).fo=Ti;Lr(kn).ho=Ms;p(kn,"PrimitiveSerialDescriptor",l,l,[he]);D($0,"IntSerializer",l,l,[cr]);D(J0,"LongSerializer",l,l,[cr]);D(H0,"ByteSerializer",l,l,[cr]);D(G0,"ShortSerializer",l,l,[cr]);D(K0,"CharSerializer",l,l,[cr]);D(W0,"DoubleSerializer",l,l,[cr]);D(Y0,"FloatSerializer",l,l,[cr]);D(Z0,"BooleanSerializer",l,l,[cr]);D(V0,"UnitSerializer",l,l,[cr]);Lr(Ua).oq=v0;Lr(Ua).bq=u0;Lr(Ua).qq=c0;Lr(Ua).sq=f0;p(Ua,"TaggedDecoder",l,l,[Kl,Wl]);p(X0,"NamedValueDecoder");D(Q0,"UIntSerializer",l,l,[cr]);D(rm,"ULongSerializer",l,l,[cr]);D(nm,"UByteSerializer",l,l,[cr]);D(em,"UShortSerializer",l,l,[cr]);p(tm,"SerializersModule");p(im,"SerialModuleImpl");p(mf,"ContextualProvider");p(am,"Argless");p(sm,"WithTypeArguments");Mr(om,"SerializersModuleCollector");p(GE,"SerializableWith",l,l,l,l,0);var Gs=Math.imul;class Af{constructor(r,e){Ie(),this.h15_1=r,this.i15_1=e,this.j15_1=new rc}pq(){return this.i15_1}k15(r,e){var t=new ec;try{return vC(this,t,r,e),t.toString()}finally{t.o15()}}l15(r,e){var t=Vf(this,e),i=new ks(this,ou(),t,r.dn(),null),a=i.bq(r);return t.c16(),a}m15(r){return this.l15(ct(),r)}}class zm extends Af{constructor(){ol=null,super(new Tf,ru()),ol=this}}class Im{constructor(r){this.d16_1=r.h15_1.y16_1,this.e16_1=r.h15_1.d17_1,this.f16_1=r.h15_1.z16_1,this.g16_1=r.h15_1.a17_1,this.h16_1=r.h15_1.c17_1,this.i16_1=r.h15_1.e17_1,this.j16_1=r.h15_1.f17_1,this.k16_1=r.h15_1.h17_1,this.l16_1=r.h15_1.o17_1,this.m16_1=r.h15_1.j17_1,this.n16_1=r.h15_1.k17_1,this.o16_1=r.h15_1.l17_1,this.p16_1=r.h15_1.m17_1,this.q16_1=r.h15_1.n17_1,this.r16_1=r.h15_1.i17_1,this.s16_1=r.h15_1.b17_1,this.t16_1=r.h15_1.g17_1,this.u16_1=r.pq(),this.v16_1=r.h15_1.p17_1,this.w16_1=r.h15_1.q17_1}x16(){if(this.t16_1){if(this.k16_1!=="type"){var r="Class discriminator should not be specified when array polymorphism is specified";throw U.v(b(r))}if(!this.l16_1.equals(iy())){var e="useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.";throw U.v(b(e))}}if(this.h16_1){if(this.i16_1!=="    "){var i=this.i16_1,a;r:{for(var s=0;s<C(i);){var o=rr(i,s);if(s=s+1|0,!(o===32||o===9||o===13||o===10)){a=!1;break r}}a=!0}var u=a;if(!u){var c="Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had "+this.i16_1;throw U.v(b(c))}}}else if(this.i16_1!=="    "){var t="Indent should not be specified when default printing mode is used";throw U.v(b(t))}return new Tf(this.d16_1,this.f16_1,this.g16_1,this.s16_1,this.h16_1,this.e16_1,this.i16_1,this.j16_1,this.t16_1,this.k16_1,this.r16_1,this.m16_1,this.n16_1,this.o16_1,this.p16_1,this.q16_1,this.l16_1,this.v16_1,this.w16_1)}}class Cm extends Af{constructor(r,e){super(r,e),NI(this)}}class Am{}class Tm{}class qm{}class Tf{constructor(r,e,t,i,a,s,o,u,c,f,v,h,d,_,m,w,x,k,S){r=r===l?!1:r,e=e===l?!1:e,t=t===l?!1:t,i=i===l?!1:i,a=a===l?!1:a,s=s===l?!0:s,o=o===l?"    ":o,u=u===l?!1:u,c=c===l?!1:c,f=f===l?"type":f,v=v===l?!1:v,h=h===l?!0:h,d=d===l?null:d,_=_===l?!1:_,m=m===l?!1:m,w=w===l?!1:w,x=x===l?iy():x,k=k===l?!0:k,S=S===l?400:S,this.y16_1=r,this.z16_1=e,this.a17_1=t,this.b17_1=i,this.c17_1=a,this.d17_1=s,this.e17_1=o,this.f17_1=u,this.g17_1=c,this.h17_1=f,this.i17_1=v,this.j17_1=h,this.k17_1=d,this.l17_1=_,this.m17_1=m,this.n17_1=w,this.o17_1=x,this.p17_1=k,this.q17_1=S}toString(){return"JsonConfiguration(encodeDefaults="+this.y16_1+", ignoreUnknownKeys="+this.z16_1+", isLenient="+this.a17_1+", "+("allowStructuredMapKeys="+this.b17_1+", prettyPrint="+this.c17_1+", explicitNulls="+this.d17_1+", ")+("prettyPrintIndent='"+this.e17_1+"', coerceInputValues="+this.f17_1+", useArrayPolymorphism="+this.g17_1+", ")+("classDiscriminator='"+this.h17_1+"', allowSpecialFloatingPointValues="+this.i17_1+", ")+("useAlternativeNames="+this.j17_1+", namingStrategy="+ue(this.k17_1)+", decodeEnumsCaseInsensitive="+this.l17_1+", ")+("allowTrailingComma="+this.m17_1+", allowComments="+this.n17_1+", classDiscriminatorMode="+this.o17_1.toString()+", ")+("exceptionsWithDebugInfo="+this.p17_1+", maxNestingDepth="+this.q17_1+")")}}class ho extends ae{}class nu{}class Om{t17(){return ct()}}class Ye{}class OI{}class fr extends Ye{toString(){return this.w17()}u17(r){r.ca(this.w17())}}class jI{}class fn extends Ye{constructor(r){super(),this.x17_1=r}equals(r){return P(this.x17_1,r)}hashCode(){return Sr(this.x17_1)}toString(){var r=Gs(this.x17_1.c1()+1|0,2),e=rn.fa(r);return this.u17(e),e.toString()}u17(r){r.da(91);for(var e=!0,t=this.x17_1.x();t.y();){var i=t.z();e||r.da(44),e=!1,i.u17(r)}r.da(93)}i1(){return this.x17_1.i1()}y17(r){return this.x17_1.l1(r)}l1(r){return r instanceof Ye?this.y17(r instanceof Ye?r:g()):!1}x(){return this.x17_1.x()}d1(r){return this.x17_1.d1(r)}z17(r){return this.x17_1.n1(r)}n1(r){return r instanceof Ye?this.z17(r instanceof Ye?r:g()):-1}m1(r){return this.x17_1.m1(r)}c1(){return this.x17_1.c1()}}class jm{t17(){return tu()}}class nr extends Ye{constructor(r){super(),this.a18_1=r}equals(r){return P(this.a18_1,r)}hashCode(){return Sr(this.a18_1)}toString(){var r=Gs(this.a18_1.c1(),6),e=rn.fa(r);return this.u17(e),e.toString()}u17(r){r.da(123);for(var e=!0,t=this.a18_1.r2().x();t.y();){var i=t.z(),a=i.k2(),s=i.l2();e||r.da(44),e=!1,dl(r,a),r.da(58),s.u17(r)}r.da(125)}i1(){return this.a18_1.i1()}b18(r){return this.a18_1.m2(r)}m2(r){return r!=null&&typeof r=="string"?this.b18(r!=null&&typeof r=="string"?r:g()):!1}c18(r){return this.a18_1.o2(r)}o2(r){return r!=null&&typeof r=="string"?this.c18(r!=null&&typeof r=="string"?r:g()):null}c1(){return this.a18_1.c1()}p2(){return this.a18_1.p2()}q2(){return this.a18_1.q2()}r2(){return this.a18_1.r2()}}class ce extends fr{constructor(){ll=null,super(),ll=this,this.d18_1="null"}v17(){return!1}w17(){return this.d18_1}}class ut extends fr{constructor(r,e,t){if(t=t===l?null:t,super(),this.e18_1=e,this.f18_1=t,this.g18_1=b(r),this.f18_1!=null&&!this.f18_1.fo()){var i="Failed requirement.";throw U.v(b(i))}}v17(){return this.e18_1}w17(){return this.g18_1}toString(){var r;if(this.e18_1){var e=this.g18_1.length+2|0,t=rn.fa(e);dl(t,this.g18_1),r=t.toString()}else r=this.g18_1;return r}u17(r){this.e18_1?dl(r,this.g18_1):r.ca(this.g18_1)}equals(r){return this===r?!0:!(r==null||!Dr(this).equals(Dr(r))||(r instanceof ut||g(),this.e18_1!==r.e18_1)||this.g18_1!==r.g18_1)}hashCode(){var r=s_(this.e18_1);return r=Gs(31,r)+se(this.g18_1)|0,r}}class wt{constructor(){var r=this;r.i18_1=vr.q4()}j18(r,e){return this.i18_1.s2(r,e)}x16(){return new nr(this.i18_1)}}class Um{constructor(){var r=this;r.k18_1=T.m()}l18(r){return this.k18_1.n(r),!0}x16(){return new fn(this.k18_1)}}class Nm{constructor(){ic=this;var r=this,e=Ez();r.r18_1=Vl("kotlinx.serialization.json.JsonElement",e,[],FI)}dn(){return this.r18_1}s18(r,e){La(r),e instanceof fr?r.rr(Bf(),e):e instanceof nr?r.rr(tu(),e):e instanceof fn?r.rr(Ff(),e):Ts()}en(r,e){return this.s18(r,e instanceof Ye?e:g())}fn(r){var e=iu(r);return e.s17()}}class Dm{constructor(){ac=this,this.m18_1=Vl("kotlinx.serialization.json.JsonPrimitive",Na(),[])}dn(){return this.m18_1}t18(r,e){La(r);var t;if(e instanceof ce)r.rr($f(),Zs()),t=or;else{var i=sy();r.rr(i,e instanceof ut?e:g()),t=or}return t}en(r,e){return this.t18(r,e instanceof fr?e:g())}fn(r){var e=iu(r),t=e.s17();if(!(t instanceof fr)){var i="Unexpected JSON element, expected JsonPrimitive, had "+b(Dr(t)),a;if(e.r17().h15_1.p17_1){var s=b(t);a=b(Jr(s))}else a=null;var o=a;throw Ur.g19(Kr(-1,i,null,null,o),i,-1,null,o,null)}return t}}class Lm{constructor(){sc=this,this.h19_1=A1(ct()).dn(),this.i19_1="kotlinx.serialization.json.JsonArray"}co(){return this.i19_1}io(r){return this.h19_1.io(r)}jo(r){return this.h19_1.jo(r)}ko(r){return this.h19_1.ko(r)}lo(r){return this.h19_1.lo(r)}mo(r){return this.h19_1.mo(r)}do(){return this.h19_1.do()}eo(){return this.h19_1.eo()}fo(){return this.h19_1.fo()}go(){return this.h19_1.go()}ho(){return this.h19_1.ho()}}class Pm{constructor(){oc=this,this.q18_1=WI()}dn(){return this.q18_1}j19(r,e){La(r),A1(ct()).en(r,e)}en(r,e){return this.j19(r,e instanceof fn?e:g())}fn(r){return Jf(r),new fn(A1(ct()).fn(r))}}class Mm{constructor(){lc=this,this.k19_1=T1(bs(),ct()).dn(),this.l19_1="kotlinx.serialization.json.JsonObject"}co(){return this.l19_1}io(r){return this.k19_1.io(r)}jo(r){return this.k19_1.jo(r)}ko(r){return this.k19_1.ko(r)}lo(r){return this.k19_1.lo(r)}mo(r){return this.k19_1.mo(r)}do(){return this.k19_1.do()}eo(){return this.k19_1.eo()}fo(){return this.k19_1.fo()}go(){return this.k19_1.go()}ho(){return this.k19_1.ho()}}class Rm{constructor(){uc=this,this.p18_1=YI()}dn(){return this.p18_1}m19(r,e){La(r),T1(bs(),ct()).en(r,e)}en(r,e){return this.m19(r,e instanceof nr?e:g())}fn(r){return Jf(r),new nr(T1(bs(),ct()).fn(r))}}class Bm{constructor(){cc=this,this.n18_1=Vl("kotlinx.serialization.json.JsonNull",ji(),[])}dn(){return this.n18_1}n19(r,e){La(r),r.wq()}en(r,e){return this.n19(r,e instanceof ce?e:g())}fn(r){if(Jf(r),r.op())throw Hf("Expected 'null' literal");return r.pp(),Zs()}}class Fm{constructor(){fc=this,this.o18_1=pz("kotlinx.serialization.json.JsonLiteral",Na())}dn(){return this.o18_1}o19(r,e){if(La(r),e.e18_1)return r.fr(e.g18_1);if(e.f18_1!=null)return r.gr(e.f18_1).fr(e.g18_1);var t=M2(e.g18_1);if(t!=null)return r.br(t);var i=$g(e.g18_1),a=i;if((a==null?null:new Qn(a))!=null){var s=i,o=(s==null?null:new Qn(s)).lm_1,u=r.gr(Zl(Ps()).dn()),c=o;return u.br(c),or}var f=rf(e.g18_1);if(f!=null)return r.dr(f);var v=Z2(e.g18_1);if(v!=null)return r.xq(v);r.fr(e.g18_1)}en(r,e){return this.o19(r,e instanceof ut?e:g())}fn(r){var e=iu(r),t=e.s17();if(!(t instanceof ut)){var i="Unexpected JSON element, expected JsonLiteral, had "+b(Dr(t)),a;if(e.r17().h15_1.p17_1){var s=b(t);a=b(Jr(s))}else a=null;var o=a;throw Ur.g19(Kr(-1,i,null,null,o),i,-1,null,o,null)}return t}}class Ks{constructor(r){this.p19_1=j_(r)}co(){return Je(this).co()}do(){return Je(this).do()}go(){return Je(this).go()}io(r){return Je(this).io(r)}jo(r){return Je(this).jo(r)}ko(r){return Je(this).ko(r)}lo(r){return Je(this).lo(r)}mo(r){return Je(this).mo(r)}}class qf{}class Of extends Fn{static w19(r){var e=this.on(r);return cn(e,e.v19_1),e.u19_1=r,delete e.message,e}ib(){return this.u19_1}get message(){return this.ib()}}class Ur extends Of{constructor(r,e,t,i,a,s){return new.target.g19(r,e,t,i,a,s)}static g19(r,e,t,i,a,s){var o=this.w19(r);return cn(o,o.f19_1),o.a19_1=e,o.b19_1=t,o.c19_1=i,o.d19_1=a,o.e19_1=s,o}}class Ws extends Of{constructor(r,e,t){return new.target.h1a(r,e,t)}static h1a(r,e,t){e=e===l?null:e,t=t===l?null:t;var i=this.w19(eC(r,t));return cn(i,i.g1a_1),i.d1a_1=r,i.e1a_1=e,i.f1a_1=t,i}}class Ys{constructor(r){this.i1a_1=r,this.j1a_1=!0}k1a(){this.j1a_1=!0}l1a(){return or}m1a(){this.j1a_1=!1}n1a(){this.j1a_1=!1}o1a(){return or}p1a(r){return this.i1a_1.q1a(r)}r1a(r){return this.i1a_1.s1a(r)}t1a(r){return this.i1a_1.s1a(r.toString())}u1a(r){return this.i1a_1.s1a(r.toString())}v1a(r){return this.i1a_1.w1a(M(r))}x1a(r){return this.i1a_1.w1a(M(r))}y1a(r){return this.i1a_1.w1a(M(r))}z1a(r){return this.i1a_1.w1a(r)}a1b(r){return this.i1a_1.s1a(r.toString())}b1b(r){return this.i1a_1.c1b(r)}}class X1 extends Ys{constructor(r,e){super(r),this.f1b_1=e}y1a(r){if(this.f1b_1){var e=r;this.b1b(x1(e))}else{var t=r;this.r1a(x1(t))}}z1a(r){if(this.f1b_1){var e=r;this.b1b(E1(e))}else{var t=r;this.r1a(E1(t))}}v1a(r){if(this.f1b_1){var e=r;this.b1b(b1(e))}else{var t=r;this.r1a(b1(t))}}x1a(r){if(this.f1b_1){var e=r;this.b1b(I1(e))}else{var t=r;this.r1a(I1(t))}}}class Q1 extends Ys{constructor(r,e){super(r),this.i1b_1=e}b1b(r){this.i1b_1?super.b1b(r):super.r1a(r)}}class $m extends Ys{constructor(r,e){super(r),this.l1b_1=e,this.m1b_1=0}k1a(){this.j1a_1=!0,this.m1b_1=this.m1b_1+1|0}l1a(){this.m1b_1=this.m1b_1-1|0}m1a(){this.j1a_1=!1,this.r1a(`
`);var r=this.m1b_1,e=0;if(e<r)do e=e+1|0,this.r1a(this.l1b_1.h15_1.e17_1);while(e<r)}n1a(){this.j1a_1?this.j1a_1=!1:this.m1a()}o1a(){this.p1a(32)}}class jf{constructor(r){var e=this;e.n1b_1=new E0(r,rC(this)),this.o1b_1=!1}p1b(r){this.n1b_1.su(r)}q1b(){return this.n1b_1.tu()}}class Jm{}class Hm{}class Gm{constructor(r){this.x1b_1=r.q17_1,this.y1b_1=r.p17_1;var e=this;e.z1b_1=Array(8);for(var t=this,i=0,a=new Int32Array(8);i<8;)a[i]=-1,i=i+1|0;t.a1c_1=a,this.b1c_1=-1}c1c(r){this.b1c_1=this.b1c_1+1|0;var e=this.b1c_1;e>=this.x1b_1&&xs(this.x1b_1),e===this.z1b_1.length&&jh(this),this.z1b_1[e]=r}d1c(r){this.a1c_1[this.b1c_1]=r}e1c(r){var e;this.a1c_1[this.b1c_1]!==-2?(this.b1c_1=this.b1c_1+1|0,e=this.b1c_1===this.z1b_1.length):e=!1,e&&jh(this),this.z1b_1[this.b1c_1]=this.y1b_1?r:hc,this.a1c_1[this.b1c_1]=-2}f1c(){this.a1c_1[this.b1c_1]===-2&&(this.z1b_1[this.b1c_1]=vc)}g1c(){var r=this.b1c_1;this.a1c_1[r]===-2&&(this.a1c_1[r]=-1,this.b1c_1=this.b1c_1-1|0),this.b1c_1!==-1&&(this.b1c_1=this.b1c_1-1|0)}h1c(){var r=rn.f();r.ca("$");var e=this.b1c_1+1|0,t=0;if(t<e)do{var i=t;t=t+1|0;var a=this.z1b_1[i];if(a!=null&&E(a,he))if(P(a.do(),Js()))this.a1c_1[i]!==-1&&(r.ca("["),r.ae(this.a1c_1[i]),r.ca("]"));else{var s=this.a1c_1[i];s>=0&&(r.ca("."),r.ca(a.io(s)))}else a===hc?r.ca("[<debug info disabled>]"):a!==vc&&(r.ca("["),r.ca("'"),r.ba(a),r.ca("'"),r.ca("]"))}while(t<e);return r.toString()}toString(){return this.h1c()}}class Uf{constructor(r){this.i1c_1=r.g17_1,this.j1c_1=!r.o17_1.equals(ty())}b15(r,e){}e15(r,e,t){var i=t.dn();fC(this,i,e)}f15(r,e){}g15(r,e){}}class Km{constructor(r,e){this.u1c_1=e,this.v1c_1=r.a17_1,this.w1c_1=r.m17_1,this.x1c_1=r.q17_1,this.y1c_1=this.u1c_1.z15_1.b1c_1}e1d(){var r=this.u1c_1.a1d(),e;if(r===1)e=cl(this,!0);else if(r===0)e=cl(this,!1);else if(r===6){this.y1c_1=this.y1c_1+1|0,this.y1c_1>=this.x1c_1&&xs(this.x1c_1);var t;this.y1c_1===200?(this.y1c_1=this.y1c_1-1|0,t=pC(this)):(t=hC(this),this.y1c_1=this.y1c_1-1|0),e=t}else if(r===8){this.y1c_1=this.y1c_1+1|0,this.y1c_1>=this.x1c_1&&xs(this.x1c_1);var i=vy(this);this.y1c_1=this.y1c_1-1|0,e=i}else this.u1c_1.s1b("Cannot read Json element because of unexpected "+pl(r));return e}}class rs extends ae{constructor(r,e,t,i){super(r,e),this.i1d_1=t,this.j1d_1=i}}class ma{}class rc{constructor(){this.t1b_1=Mh(16)}l1d(r,e,t){var i=this.t1b_1,a=i.o2(r),s;if(a==null){var o=Mh(2);i.s2(r,o),s=o}else s=a;var u=s,c=e instanceof ma?e:g(),f=t??g();u.s2(c,f)}u1b(r,e,t){var i=this.m1d(r,e);if(i!=null)return i;var a=t();return this.l1d(r,e,a),a}m1d(r,e){var t=this.t1b_1.o2(r),i;t==null?i=null:i=t.o2(e instanceof ma?e:g());var a=i;return a??null}}class Wm{constructor(r){this.n1d_1=r}}class ks extends qi{constructor(r,e,t,i,a){super(),this.p15_1=r,this.q15_1=e,this.r15_1=t,this.s15_1=this.p15_1.pq(),this.t15_1=-1,this.u15_1=a,this.v15_1=this.p15_1.h15_1,this.w15_1=this.v15_1.d17_1?null:new jf(i)}r17(){return this.p15_1}pq(){return this.s15_1}s17(){return new Km(this.p15_1.h15_1,this.r15_1).e1d()}bq(r){try{var e;if(r instanceof ga?e=this.p15_1.h15_1.g17_1:e=!0,e)return r.fn(this);var t=hl(r.dn(),this.p15_1),i=this.r15_1.w1d(t,this.v15_1.a17_1),a;if(i==null){var s=E(r,oa)?r:g(),o;r:{var u;if(s instanceof ga?u=this.r17().h15_1.g17_1:u=!0,u){o=s.fn(this);break r}var c=hl(s.dn(),this.r17()),f=this.s17(),v=s.dn().co();if(!(f instanceof nr)){var h="Expected "+Nr(nr).oc()+", but had "+Dr(f).oc()+" as the serialized body of "+v,d=this.r15_1.z15_1.h1c(),_;if(this.r17().h15_1.p17_1){var m=b(f);_=b(Jr(m))}else _=null;var w=_;throw Ur.g19(Kr(-1,h,d,null,w),h,-1,d,w,null)}var x=f,k=x.c18(c),S=k==null?null:An(k),z=S==null?null:Bn(S),I;try{I=C1(s,this,z)}catch(Q){var A;if(Q instanceof Fn){var q=Q,N=un(q.message),$;if(this.r17().h15_1.p17_1){var O=x.toString();$=b(Jr(O))}else $=null;var L=$;throw Ur.g19(Kr(-1,N,null,null,L),N,-1,null,L,null)}else throw Q}var H=I,B=E(H,oa)?H:g();o=by(this.r17(),c,x,B)}return o}else a=i;var F=a,R;try{R=C1(r,this,F)}catch(Q){var X;if(Q instanceof Fn){var J=Q,er=Qi(V2(un(J.message),10),"."),Y=X2(un(J.message),10,"");this.r15_1.s1b(er,l,Y)}else throw Q;R=X}var G=R,sr=E(G,oa)?G:g();return this.u15_1=new Wm(t),sr.fn(this)}catch(Q){if(Q instanceof Hl){var ur=Q;throw ws(un(ur.message),"at path")?ur:Uz(ur,Kb(ur.message," at path: ")+this.r15_1.z15_1.h1c())}else throw Q}}cq(r){var e=gy(this.p15_1,r);this.r15_1.z15_1.c1c(r),this.r15_1.o1d(e.i1d_1),SC(this);var t;switch(e.x2_1){case 1:case 2:case 3:t=new ks(this.p15_1,e,this.r15_1,r,this.u15_1);break;default:var i;this.q15_1.equals(e)&&this.p15_1.h15_1.d17_1?i=this:i=new ks(this.p15_1,e,this.r15_1,r,this.u15_1),t=i;break}return t}dq(r){r.go()===0&&Wf(r,this.p15_1)&&xC(this,r),this.r15_1.p1d()&&!this.p15_1.h15_1.m17_1&&Ui(this.r15_1,""),this.r15_1.o1d(this.q15_1.j1d_1),this.r15_1.z15_1.g1c()}op(){var r,e=this.w15_1,t=e==null?null:e.o1b_1;return t??!1?r=!1:r=!this.r15_1.x1d(),r}pp(){return null}nq(r,e,t,i){var a=this.q15_1.equals(vl())&&(e&1)===0;a&&this.r15_1.z15_1.f1c();var s=super.nq(r,e,t,i);return a&&this.r15_1.z15_1.e1c(s),s}rq(r){var e;switch(this.q15_1.x2_1){case 0:e=IC(this,r);break;case 2:e=EC(this);break;default:e=AC(this);break}return this.q15_1.equals(vl())||this.r15_1.z15_1.d1c(e),e}qp(){return this.r15_1.y1d()}rp(){var r=this.r15_1.z1d();return ir(r,M(Wu(r)))||this.r15_1.s1b("Failed to parse byte for input '"+r.toString()+"'"),Wu(r)}sp(){var r=this.r15_1.z1d();return ir(r,M(Yu(r)))||this.r15_1.s1b("Failed to parse short for input '"+r.toString()+"'"),Yu(r)}tp(){var r=this.r15_1.z1d();return ir(r,M(Xr(r)))||this.r15_1.s1b("Failed to parse int for input '"+r.toString()+"'"),Xr(r)}up(){return this.r15_1.z1d()}vp(){var r=this.r15_1,e;r:{var t=r.d1d();try{e=zo(t);break r}catch(s){if(s instanceof U)r.s1b("Failed to parse type 'float' for input '"+t+"'");else throw s}}var i=e,a=this.p15_1.h15_1.i17_1;if(a||Zc(i))return i;Ch(this.r15_1,i)}wp(){var r=this.r15_1,e;r:{var t=r.d1d();try{e=zo(t);break r}catch(s){if(s instanceof U)r.s1b("Failed to parse type 'double' for input '"+t+"'");else throw s}}var i=e,a=this.p15_1.h15_1.i17_1;if(a||Vc(i))return i;Ch(this.r15_1,i)}xp(){var r=this.r15_1.d1d();return r.length!==1&&this.r15_1.s1b("Expected single char, but got '"+r+"'"),K(r,0)}yp(){var r;return this.v15_1.a17_1?r=this.r15_1.v1d():r=this.r15_1.c1d(),r}zp(r){return Yf(r)?new Nf(this.r15_1,this.p15_1):super.zp(r)}}class Nf extends qi{constructor(r,e){super(),this.a1e_1=r,this.b1e_1=e.pq()}pq(){return this.b1e_1}rq(r){var e="unsupported";throw xr.o3(b(e))}tp(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=OE(t);e=i;break r}catch(a){if(a instanceof U)r.s1b("Failed to parse type 'UInt' for input '"+t+"'");else throw a}}return e}up(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=jE(t);e=i;break r}catch(a){if(a instanceof U)r.s1b("Failed to parse type 'ULong' for input '"+t+"'");else throw a}}return e}rp(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=UE(t);e=i;break r}catch(a){if(a instanceof U)r.s1b("Failed to parse type 'UByte' for input '"+t+"'");else throw a}}return e}sp(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=NE(t);e=i;break r}catch(a){if(a instanceof U)r.s1b("Failed to parse type 'UShort' for input '"+t+"'");else throw a}}return e}}class ua extends Fs{constructor(r,e,t,i){return new.target.c1e(r,e,t,i)}static c1e(r,e,t,i){var a=this.tq();a.k1c_1=r,a.l1c_1=e,a.m1c_1=t,a.n1c_1=i,a.o1c_1=a.l1c_1.pq(),a.p1c_1=a.l1c_1.h15_1,a.q1c_1=!1,a.r1c_1=null,a.s1c_1=null;var s=a.m1c_1.x2_1;return a.n1c_1!=null&&(a.n1c_1[s]!==null||a.n1c_1[s]!==a)&&(a.n1c_1[s]=a),a}r17(){return this.l1c_1}static t1c(r,e,t,i){return this.c1e(XI(r,e),e,t,i)}pq(){return this.o1c_1}rr(r,e){r:{if(this.r17().h15_1.g17_1){r.en(this,e);break r}var t=r instanceof ga,i;if(t)i=!this.r17().h15_1.o17_1.equals(ty());else{var a;switch(this.r17().h15_1.o17_1.x2_1){case 0:case 2:a=!1;break;case 1:var s=r.dn().do();a=P(s,Xl())||P(s,zf());break;default:Ts();break}i=a}var o=i,u=o?hl(r.dn(),this.r17()):null,c;if(t){var f=r instanceof ga?r:g();n:if(e==null){var v="Value for serializer "+b(r.dn())+" should always be non-null. Please report issue to the kotlinx.serialization tracker.";throw U.v(b(v))}else break n;var h=KE(f,this,e);c=E(h,Jl)?h:g()}else c=r;var d=c;if(u!=null){yC(this.r17(),r,d,u),wC(d.dn().do());var _=d.dn().co();this.r1c_1=u,this.s1c_1=_}d.en(this,e)}}cq(r){var e=gy(this.l1c_1,r);e.i1d_1!==0&&(this.k1c_1.p1a(e.i1d_1),this.k1c_1.k1a());var t=this.r1c_1;if(t!=null){var i=this.s1c_1;OC(this,t,i??r.co()),this.r1c_1=null,this.s1c_1=null}if(this.m1c_1.equals(e))return this;var a=this.n1c_1,s=a==null?null:a[e.x2_1];return s??ua.c1e(this.k1c_1,this.l1c_1,e,this.n1c_1)}dq(r){this.m1c_1.j1d_1!==0&&(this.k1c_1.l1a(),this.k1c_1.n1a(),this.k1c_1.p1a(this.m1c_1.j1d_1))}uq(r,e){switch(this.m1c_1.x2_1){case 1:this.k1c_1.j1a_1||this.k1c_1.p1a(44),this.k1c_1.m1a();break;case 2:if(this.k1c_1.j1a_1)this.q1c_1=!0,this.k1c_1.m1a();else{var t=this,i;e%2|0?(this.k1c_1.p1a(58),this.k1c_1.o1a(),i=!1):(this.k1c_1.p1a(44),this.k1c_1.m1a(),i=!0),t.q1c_1=i}break;case 3:e===0&&(this.q1c_1=!0),e===1&&(this.k1c_1.p1a(44),this.k1c_1.o1a(),this.q1c_1=!1);break;default:this.k1c_1.j1a_1||this.k1c_1.p1a(44),this.k1c_1.m1a(),this.fr(aC(r,this.l1c_1,e)),this.k1c_1.p1a(58),this.k1c_1.o1a();break}return!0}gr(r){var e;if(Yf(r)){var t,i=this.k1c_1;if(i instanceof X1)t=this.k1c_1;else{var a=this.k1c_1.i1a_1,s=this.q1c_1;t=new X1(a,s)}var o=t;e=ua.c1e(o,this.l1c_1,this.m1c_1,null)}else if(jC(r)){var u,c=this.k1c_1;if(c instanceof Q1)u=this.k1c_1;else{var f=this.k1c_1.i1a_1,v=this.q1c_1;u=new Q1(f,v)}var h=u;e=ua.c1e(h,this.l1c_1,this.m1c_1,null)}else this.r1c_1!=null?(this.s1c_1=r.co(),e=this):e=super.gr(r);return e}wq(){this.k1c_1.r1a("null")}xq(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.a1b(r)}yq(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.v1a(r)}zq(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.x1a(r)}ar(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.y1a(r)}br(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.z1a(r)}cr(r){if(this.q1c_1?this.fr(r.toString()):this.k1c_1.t1a(r),!this.p1c_1.i17_1&&!Zc(r))throw Ah(r)}dr(r){if(this.q1c_1?this.fr(r.toString()):this.k1c_1.u1a(r),!this.p1c_1.i17_1&&!Vc(r))throw Ah(r)}er(r){this.fr(yr(r))}fr(r){return this.k1c_1.b1b(r)}}class eu extends X0{constructor(r,e,t){t=t===l?null:t,super(),this.f1e_1=r,this.g1e_1=e,this.h1e_1=t,this.i1e_1=this.r17().h15_1}r17(){return this.f1e_1}l2(){return this.g1e_1}pq(){return this.r17().pq()}k1e(){var r=this.o13(),e;r==null?e=null:e=this.l1e(r);var t=e;return t??this.l2()}j1e(r){return this.q13()+("."+r)}s17(){return this.k1e()}bq(r){var e;r:{var t;if(r instanceof ga?t=this.r17().h15_1.g17_1:t=!0,t){e=r.fn(this);break r}var i=hl(r.dn(),this.r17()),a=this.s17(),s=r.dn().co();if(!(a instanceof nr)){var o="Expected "+Nr(nr).oc()+", but had "+Dr(a).oc()+" as the serialized body of "+s,u=this.q13(),c;if(this.r17().h15_1.p17_1){var f=b(a);c=b(Jr(f))}else c=null;var v=c;throw Ur.g19(Kr(-1,o,u,null,v),o,-1,u,v,null)}var h=a,d=h.c18(i),_=d==null?null:An(d),m=_==null?null:Bn(_),w;try{w=C1(r,this,m)}catch(N){if(N instanceof Fn){var x=N,k=un(x.message),S;if(this.r17().h15_1.p17_1){var z=h.toString();S=b(Jr(z))}else S=null;var I=S;throw Ur.g19(Kr(-1,k,null,null,I),k,-1,null,I,null)}else throw N}var A=w,q=E(A,oa)?A:g();e=by(this.r17(),i,h,q)}return e}p13(r,e){return e}cq(r){var e=this.k1e(),t=r.do(),i,a;if(P(t,Js())?a=!0:a=t instanceof Oa,a){var s=this.r17(),o=r.co();if(!(e instanceof fn)){var u="Expected "+Nr(fn).oc()+", but had "+Dr(e).oc()+" as the serialized body of "+o,c=this.q13(),f;if(this.r17().h15_1.p17_1){var v=b(e);f=b(Jr(v))}else f=null;var h=f;throw Ur.g19(Kr(-1,u,c,null,h),u,-1,c,h,null)}i=new nc(s,e)}else if(P(t,Ql())){var d=this.r17(),_=fl(r.lo(0),d.pq()),m=_.do(),w,x;if(m instanceof Hn?x=!0:x=P(m,ji()),x){var k=this.r17(),S=r.co();if(!(e instanceof nr)){var z="Expected "+Nr(nr).oc()+", but had "+Dr(e).oc()+" as the serialized body of "+S,I=this.q13(),A;if(this.r17().h15_1.p17_1){var q=b(e);A=b(Jr(q))}else A=null;var N=A;throw Ur.g19(Kr(-1,z,I,null,N),z,-1,I,N,null)}w=new Zm(k,e,r)}else if(d.h15_1.b17_1){var $=this.r17(),O=r.co();if(!(e instanceof fn)){var L="Expected "+Nr(fn).oc()+", but had "+Dr(e).oc()+" as the serialized body of "+O,H=this.q13(),B;if(this.r17().h15_1.p17_1){var F=b(e);B=b(Jr(F))}else B=null;var R=B;throw Ur.g19(Kr(-1,L,H,null,R),L,-1,H,R,null)}w=new nc($,e)}else throw oy(_);i=w}else{var X=this.r17(),J=r.co();if(!(e instanceof nr)){var er="Expected "+Nr(nr).oc()+", but had "+Dr(e).oc()+" as the serialized body of "+J,Y=this.q13(),G;if(this.r17().h15_1.p17_1){var sr=b(e);G=b(Jr(sr))}else G=null;var ur=G;throw Ur.g19(Kr(-1,er,Y,null,ur),er,-1,Y,ur,null)}i=new Da(X,e,r,this.h1e_1)}return i}dq(r){}op(){var r=this.k1e();return!(r instanceof ce)}m1e(r){return this.l1e(r)!==Zs()}s13(r){return this.m1e(r!=null&&typeof r=="string"?r:g())}n1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Nr(fr).oc()+", but had "+Dr(t).oc()+" as the serialized body of boolean",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw Ur.g19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Mf(c),v;f==null?qn(this,c,"boolean",r):v=f,e=v;break r}catch(h){if(h instanceof U)qn(this,c,"boolean",r);else throw h}}return e}t13(r){return this.n1e(r!=null&&typeof r=="string"?r:g())}o1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Nr(fr).oc()+", but had "+Dr(t).oc()+" as the serialized body of byte",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw Ur.g19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=ra(c),v,h=Me(-128,127);so(E(h,ea)?h:g(),f)?v=Wu(f):v=null;var d=v,_;d==null?qn(this,c,"byte",r):_=d,e=_;break r}catch(m){if(m instanceof U)qn(this,c,"byte",r);else throw m}}return e}u13(r){return this.o1e(r!=null&&typeof r=="string"?r:g())}p1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Nr(fr).oc()+", but had "+Dr(t).oc()+" as the serialized body of short",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw Ur.g19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=ra(c),v,h=Me(-32768,32767);so(E(h,ea)?h:g(),f)?v=Yu(f):v=null;var d=v,_;d==null?qn(this,c,"short",r):_=d,e=_;break r}catch(m){if(m instanceof U)qn(this,c,"short",r);else throw m}}return e}v13(r){return this.p1e(r!=null&&typeof r=="string"?r:g())}q1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Nr(fr).oc()+", but had "+Dr(t).oc()+" as the serialized body of int",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw Ur.g19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=ra(c),v,h=Me(-2147483648,2147483647);so(E(h,ea)?h:g(),f)?v=Xr(f):v=null;var d=v,_;d==null?qn(this,c,"int",r):_=d,e=_;break r}catch(m){if(m instanceof U)qn(this,c,"int",r);else throw m}}return e}w13(r){return this.q1e(r!=null&&typeof r=="string"?r:g())}r1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Nr(fr).oc()+", but had "+Dr(t).oc()+" as the serialized body of long",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw Ur.g19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=ra(c),v;f==null?qn(this,c,"long",r):v=f,e=v;break r}catch(h){if(h instanceof U)qn(this,c,"long",r);else throw h}}return e}x13(r){return this.r1e(r!=null&&typeof r=="string"?r:g())}s1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Nr(fr).oc()+", but had "+Dr(t).oc()+" as the serialized body of float",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw Ur.g19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=RI(c),v;f==null?qn(this,c,"float",r):v=f,e=v;break r}catch(S){if(S instanceof U)qn(this,c,"float",r);else throw S}}var h=e,d=this.r17().h15_1.i17_1;if(d||Zc(h))return h;var _=Th(h,r),m="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",w;if(this.r17().h15_1.p17_1){var x=b(this.k1e());w=b(Jr(x))}else w=null;var k=w;throw Ur.g19(Kr(-1,_,null,m,k),_,-1,null,k,m)}y13(r){return this.s1e(r!=null&&typeof r=="string"?r:g())}t1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Nr(fr).oc()+", but had "+Dr(t).oc()+" as the serialized body of double",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw Ur.g19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=BI(c),v;f==null?qn(this,c,"double",r):v=f,e=v;break r}catch(S){if(S instanceof U)qn(this,c,"double",r);else throw S}}var h=e,d=this.r17().h15_1.i17_1;if(d||Vc(h))return h;var _=Th(h,r),m="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",w;if(this.r17().h15_1.p17_1){var x=b(this.k1e());w=b(Jr(x))}else w=null;var k=w;throw Ur.g19(Kr(-1,_,null,m,k),_,-1,null,k,m)}z13(r){return this.t1e(r!=null&&typeof r=="string"?r:g())}u1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Nr(fr).oc()+", but had "+Dr(t).oc()+" as the serialized body of char",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw Ur.g19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=new Sn(Bb(c.w17())),v;f==null?qn(this,c,"char",r):v=f,e=v.x1_1;break r}catch(h){if(h instanceof U)qn(this,c,"char",r);else throw h}}return e}a14(r){return this.u1e(r!=null&&typeof r=="string"?r:g())}v1e(r){var e=this.l1e(r);if(!(e instanceof fr)){var t="Expected "+Nr(fr).oc()+", but had "+Dr(e).oc()+" as the serialized body of string",i=this.j1e(r),a;if(this.r17().h15_1.p17_1){var s=b(e);a=b(Jr(s))}else a=null;var o=a;throw Ur.g19(Kr(-1,t,i,null,o),t,-1,i,o,null)}var u=e;if(!(u instanceof ut)){var c="Expected string value for a non-null key '"+r+"', got null literal instead",f=this.j1e(r),v="Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.",h;if(this.r17().h15_1.p17_1){var d=b(this.k1e());h=b(Jr(d))}else h=null;var _=h;throw Ur.g19(Kr(-1,c,f,v,_),c,-1,f,_,v)}if(!u.e18_1&&!this.r17().h15_1.a17_1){var m="String literal for value of key '"+r+"' should be quoted",w=this.j1e(r),x="Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.",k;if(this.r17().h15_1.p17_1){var S=b(this.k1e());k=b(Jr(S))}else k=null;var z=k;throw Ur.g19(Kr(-1,m,w,x,z),m,-1,w,z,x)}return u.g18_1}b14(r){return this.v1e(r!=null&&typeof r=="string"?r:g())}w1e(r,e){var t;if(Yf(e)){var i=this.r17(),a=this.l1e(r),s=e.co();if(!(a instanceof fr)){var o="Expected "+Nr(fr).oc()+", but had "+Dr(a).oc()+" as the serialized body of "+s,u=this.j1e(r),c;if(this.r17().h15_1.p17_1){var f=b(a);c=b(Jr(f))}else c=null;var v=c;throw Ur.g19(Kr(-1,o,u,null,v),o,-1,u,v,null)}var h=Vf(i,a.w17());t=new Nf(h,this.r17())}else t=super.c14(r,e);return t}c14(r,e){return this.w1e(r!=null&&typeof r=="string"?r:g(),e)}zp(r){return this.o13()!=null?super.zp(r):new Ym(this.r17(),this.l2(),this.h1e_1).zp(r)}}class Da extends eu{constructor(r,e,t,i,a){i=i===l?null:i,a=a===l?null:a,super(r,e,i),this.d1f_1=e,this.e1f_1=a,this.f1f_1=this.l2().r2().x(),this.g1f_1=this.i1e_1.d17_1?null:new jf(t),this.h1f_1=null,this.i1f_1=null}l2(){return this.d1f_1}rq(r){var e=this.f1f_1;r:for(;e.y();){var t=e.z(),i=t.k2(),a=au(r,this.r17(),i);if(a!==-3){if(this.i1e_1.f17_1&&NC(this,r,a,t.l2()))continue r;var s=this.g1f_1;return s==null||s.p1b(a),this.h1f_1=i,this.i1f_1=t.l2(),a}i!==this.h1e_1&&!Wf(r,this.r17())&&DC(this,i)}var o=this.g1f_1,u=o==null?null:o.q1b(),c=u??-1;return c!==-1&&(this.h1f_1=r.io(c),this.i1f_1=null),c}op(){var r,e=this.g1f_1,t=e==null?null:e.o1b_1;return t??!1?r=!1:r=super.op(),r}k13(r,e){var t=this.h1f_1;return t??r.io(e)}l1e(r){var e=this.i1f_1;return e??Se(this.l2(),r)}cq(r){if(r===this.e1f_1){var e=this.r17(),t=this.k1e(),i=this.e1f_1.co();if(!(t instanceof nr)){var a="Expected "+Nr(nr).oc()+", but had "+Dr(t).oc()+" as the serialized body of "+i,s=this.q13(),o;if(this.r17().h15_1.p17_1){var u=b(t);o=b(Jr(u))}else o=null;var c=o;throw Ur.g19(Kr(-1,a,s,null,c),a,-1,s,c,null)}return new Da(e,t,r,this.h1e_1,this.e1f_1)}return super.cq(r)}}class nc extends eu{constructor(r,e){super(r,e),this.p1f_1=e,this.q1f_1=this.p1f_1.c1(),this.r1f_1=-1}l2(){return this.p1f_1}k13(r,e){return e.toString()}l1e(r){return this.p1f_1.d1($x(r))}rq(r){for(;this.r1f_1<(this.q1f_1-1|0);)return this.r1f_1=this.r1f_1+1|0,this.r1f_1;return-1}}class Ym extends eu{constructor(r,e,t){t=t===l?null:t,super(r,e,t),this.y1f_1=e,this.d14("primitive")}l2(){return this.y1f_1}rq(r){return 0}l1e(r){if(r!=="primitive"){var e="This input can only handle primitives with 'primitive' tag";throw U.v(b(e))}return this.y1f_1}}class Zm extends Da{constructor(r,e,t){super(r,e,t),this.l1g_1=Ei(e.p2()),this.m1g_1=Gs(this.l1g_1.c1(),2),this.n1g_1=-1}k13(r,e){var t=e/2|0;return this.l1g_1.d1(t)}rq(r){for(;this.n1g_1<(this.m1g_1-1|0);)return this.n1g_1=this.n1g_1+1|0,this.n1g_1;return-1}l1e(r){return this.n1g_1%2|0?Se(this.l2(),r):re(r)}dq(r){}}class Vm{constructor(r){this.x15_1=r,this.y15_1=0,this.z15_1=new Gm(this.x15_1),this.a16_1=null,this.b16_1=rn.f()}r1g(){}p1d(){var r=this.s1g(),e=this.p1g();return r>=C(e)||r===-1?!1:rr(e,r)===44?(this.y15_1=this.y15_1+1|0,!0):!1}t1g(r){return!(r===125||r===93||r===58||r===44)}c16(){var r=this.f1d();r!==10&&this.s1b("Expected EOF after parsing, but had "+yr(rr(this.p1g(),this.y15_1-1|0))+" instead")}z1c(r){var e=this.f1d();if(e!==r){var t=pl(r),i=this.y15_1>0?this.y15_1-1|0:this.y15_1,a=this.y15_1===C(this.p1g())||i<0?"EOF":yr(rr(this.p1g(),i)),s="Expected "+t+", but had '"+a+"' instead";this.s1b(s,i)}return e}u1g(r){if(this.y15_1>0&&r===34){var e;r:{var t=this.y15_1;try{this.y15_1=this.y15_1-1|0,e=this.d1d();break r}finally{this.y15_1=t}}var i=e;i==="null"&&this.r1b("Expected string literal but 'null' literal was found",this.y15_1-1|0,"Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.")}var a=Ge(r),s=pl(a),o=this.y15_1>0?this.y15_1-1|0:this.y15_1,u=this.y15_1===C(this.p1g())||o<0?"EOF":yr(rr(this.p1g(),o)),c="Expected "+s+", but had '"+u+"' instead";this.s1b(c,o)}a1d(){var r=this.p1g(),e=this.y15_1;r:for(;;){if(e=this.q1g(e),e===-1)break r;var t=rr(r,e);if(t===32||t===10||t===13||t===9){e=e+1|0;continue r}return this.y15_1=e,Ge(t)}return this.y15_1=e,10}q1d(r){var e=this.s1g();e=this.q1g(e);var t=C(this.p1g())-e|0;if(t<4||e===-1)return!1;var i=0;if(i<=3)do{var a=i;if(i=i+1|0,K("null",a)!==rr(this.p1g(),e+a|0))return!1}while(i<=3);return t>4&&Ge(rr(this.p1g(),e+4|0))===0?!1:(r&&(this.y15_1=e+4|0),!0)}x1d(r,e){return r=r===l?!0:r,e===l?this.q1d(r):e.q1d.call(this,r)}r1d(r){var e=this.a1d(),t;if(r){if(e!==1&&e!==0)return null;t=this.d1d()}else{if(e!==1)return null;t=this.c1d()}var i=t;return this.a16_1=i,i}v1g(){this.a16_1=null}w1g(r,e){var t=this.p1g();return b(Un(t,r,e))}c1d(){return this.a16_1!=null?Lh(this):this.u1d()}consumeString2(r,e,t){for(var i=t,a=e,s=rr(r,i),o=!1;s!==34;)s===92?(o=!0,i=this.q1g(LC(this,a,i)),i===-1&&this.s1b("Unexpected EOF",i),a=i):(i=i+1|0,i>=C(r)&&(o=!0,this.o1g(a,i),i=this.q1g(i),i===-1&&this.s1b("Unexpected EOF",i),a=i)),s=rr(r,i);var u;o?u=Uu(this,a,i):u=this.w1g(a,i);var c=u;return this.y15_1=i+1|0,c}v1d(){var r=this.d1d();return r==="null"&&PC(this)&&this.s1b("Unexpected 'null' value instead of string literal"),r}d1d(){if(this.a16_1!=null)return Lh(this);var r=this.s1g();(r>=C(this.p1g())||r===-1)&&this.s1b("EOF",r);var e=Ge(rr(this.p1g(),r));if(e===1)return this.c1d();e!==0&&this.s1b("Expected beginning of the string, but got "+yr(rr(this.p1g(),r)));for(var t=!1;Ge(rr(this.p1g(),r))===0;)if(r=r+1|0,r>=C(this.p1g())){t=!0,this.o1g(this.y15_1,r);var i=this.q1g(r);if(i===-1)return this.y15_1=r,Uu(this,0,0);r=i}var a;t?a=Uu(this,this.y15_1,r):a=this.w1g(this.y15_1,r);var s=a;return this.y15_1=r,s}o1g(r,e){this.b16_1.yd(this.p1g(),r,e)}t1d(r){var e=T.m(),t=this.a1d();if(t!==8&&t!==6)return this.d1d(),or;r:for(;;){if(t=this.a1d(),t===1){r?this.d1d():this.u1d();continue r}var i=t;if(i===8||i===6?e.n(t):i===9?(Ju(e)!==8&&this.s1b("found ] instead of }"),th(e)):i===7?(Ju(e)!==6&&this.s1b("found } instead of ]"),th(e)):i===10&&this.s1b("Unexpected end of input due to malformed JSON during ignoring unknown keys"),this.f1d(),e.c1()===0)return or}}toString(){return"JsonReader(source='"+b(this.p1g())+"', currentPosition="+this.y15_1+")"}s1d(r){var e=this.w1g(0,this.y15_1),t=Q2(e,r);this.r1b("Encountered an unknown key '"+r+"'",t,"Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.")}r1b(r,e,t){throw nC(this,r,e,this.z15_1.h1c(),t,this.p1g())}s1b(r,e,t,i){return e=e===l?this.y15_1:e,t=t===l?null:t,i===l?this.r1b(r,e,t):i.r1b.call(this,r,e,t)}z1d(){var r=this.s1g();r=this.q1g(r),(r>=C(this.p1g())||r===-1)&&this.s1b("EOF");var e;rr(this.p1g(),r)===34?(r=r+1|0,r===C(this.p1g())&&this.s1b("EOF"),e=!0):e=!1;var t=e,i=new y(0,0),a=new y(0,0),s=!1,o=!1,u=!1,c=r;r:for(;r!==C(this.p1g());){var f=rr(this.p1g(),r);if((f===101||f===69)&&!u){r===c&&this.s1b("Unexpected symbol '"+yr(f)+"' in numeric literal",r),o=!0,u=!0,r=r+1|0;continue r}if(f===45&&u){r===c&&this.s1b("Unexpected symbol '-' in numeric literal",r),o=!1,r=r+1|0;continue r}if(f===43&&u){r===c&&this.s1b("Unexpected symbol '+' in numeric literal",r),o=!0,r=r+1|0;continue r}if(f===45){r!==c&&this.s1b("Unexpected symbol '-' in numeric literal",r),s=!0,r=r+1|0;continue r}var v=Ge(f);if(v!==0)break r;r=r+1|0;var h=te(f,48);if(0<=h&&h<=9||this.s1b("Unexpected symbol '"+yr(f)+"' in numeric literal",r-1|0),u){var d=a,_=qr(d,M(10));a=hr(_,M(h));continue r}var m=i,w=qr(m,M(10));i=Hr(w,M(h)),tr(i,new y(0,0))>0&&this.s1b("Numeric value overflow")}var x=r!==c;if((c===r||s&&c===(r-1|0))&&this.s1b("Expected numeric literal",r),t&&(x||this.s1b("EOF"),rr(this.p1g(),r)!==34&&this.s1b("Expected closing quotation mark",r),r=r+1|0),this.y15_1=r,u){var k=Zn(i)*BC(a,o);(k>Zn(new y(-1,2147483647))||k<Zn(new y(0,-2147483648)))&&this.s1b("Numeric value overflow"),Math.floor(k)!==k&&this.s1b("Can't convert "+k+" to Long"),i=jn(k)}var S;return s?S=i:ir(i,new y(0,-2147483648))?this.s1b("Numeric value overflow"):S=tn(i),S}h18(){var r=this.z1d(),e=this.f1d();if(e!==10){var t=this.y15_1>0?this.y15_1-1|0:this.y15_1,i=this.y15_1===C(this.p1g())||t<0?"EOF":yr(rr(this.p1g(),t)),a="Expected input to contain a single valid number, but got '"+i+"' after it";this.s1b(a,t)}return r}y1d(){var r=this.s1g();r===C(this.p1g())&&this.s1b("EOF");var e;rr(this.p1g(),r)===34?(r=r+1|0,e=!0):e=!1;var t=e,i=RC(this,r);return t&&(this.y15_1===C(this.p1g())&&this.s1b("EOF"),rr(this.p1g(),this.y15_1)!==34&&this.s1b("Expected closing quotation mark"),this.y15_1=this.y15_1+1|0),i}}class Xm{constructor(){pc=this,this.x1g_1=ds(117),this.y1g_1=new Int8Array(126),$C(this),JC(this)}}class Df extends Vm{constructor(r,e){super(e),this.k1h_1=r}p1g(){return this.k1h_1}q1g(r){return r<this.p1g().length?r:-1}f1d(){var r=this.p1g(),e=this.y15_1;r:for(;e!==-1&&e<r.length;){var t=e;e=t+1|0;var i=K(r,t);if(i===32||i===10||i===13||i===9)continue r;return this.y15_1=e,Ge(i)}return this.y15_1=r.length,10}b1d(){var r=this.y15_1;if(r===-1)return!1;var e=this.p1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}return this.y15_1=r,this.t1g(t)}return this.y15_1=r,!1}s1g(){var r=this.y15_1;if(r===-1)return r;var e=this.p1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9)r=r+1|0;else break r}return this.y15_1=r,r}o1d(r){this.y15_1===-1&&this.u1g(r);var e=this.p1g(),t=this.y15_1;r:for(;t<e.length;){var i=t;t=i+1|0;var a=K(e,i);if(a===32||a===10||a===13||a===9)continue r;if(this.y15_1=t,a===r)return or;this.u1g(r)}this.y15_1=-1,this.u1g(r)}u1d(){this.o1d(34);var r=this.y15_1,e=Ll(this.p1g(),34,r);if(e===-1){this.d1d();var t=pl(1),i=this.y15_1,a=this.y15_1===C(this.p1g())||i<0?"EOF":yr(rr(this.p1g(),i)),s="Expected "+t+", but had '"+a+"' instead";this.s1b(s,i)}var o=r;if(o<e)do{var u=o;if(o=o+1|0,K(this.p1g(),u)===92)return this.consumeString2(this.p1g(),this.y15_1,u)}while(o<e);return this.y15_1=e+1|0,ie(this.p1g(),r,e)}w1d(r,e){var t=this.y15_1;try{if(this.f1d()!==6)return null;var i=this.r1d(e);return i!==r||(this.v1g(),this.f1d()!==5)?null:this.r1d(e)}finally{this.y15_1=t,this.v1g()}}}class Qm extends Df{f1d(){var r=this.p1g(),e=this.s1g();return e>=r.length||e===-1?10:(this.y15_1=e+1|0,Ge(K(r,e)))}b1d(){var r=this.s1g();return r>=this.p1g().length||r===-1?!1:this.t1g(K(this.p1g(),r))}o1d(r){var e=this.p1g(),t=this.s1g();(t>=e.length||t===-1)&&(this.y15_1=-1,this.u1g(r));var i=K(e,t);if(this.y15_1=t+1|0,i===r)return or;this.u1g(r)}a1d(){var r=this.p1g(),e=this.s1g();return e>=r.length||e===-1?10:(this.y15_1=e,Ge(K(r,e)))}s1g(){var r=this.y15_1;if(r===-1)return r;var e=this.p1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}if(t===47&&(r+1|0)<e.length){var i=K(e,r+1|0);if(i===47){r=Ll(e,10,r+2|0),r===-1?r=e.length:r=r+1|0;continue r}else if(i===42){r=To(e,"*/",r+2|0),r===-1?(this.y15_1=e.length,this.s1b('Expected end of the block comment: "*/", but had EOF instead')):r=r+2|0;continue r}}break r}return this.y15_1=r,r}}class ec{constructor(){this.n15_1=rn.fa(128)}w1a(r){this.n15_1.be(r)}q1a(r){this.n15_1.da(r)}s1a(r){this.n15_1.ca(r)}c1b(r){dl(this.n15_1,r)}o15(){this.n15_1.ee()}toString(){return this.n15_1.toString()}}var ol;function Ie(){return ol===l&&new zm,ol}function UI(n,r){n=n===l?Ie():n;var e=new Im(n);r(e);var t=e.x16();return new Cm(t,e.u16_1)}function NI(n){if(P(n.pq(),ru()))return or;var r=new Uf(n.h15_1);n.pq().s14(r)}var zh;function Lf(){if(zh)return or;zh=!0,ry=new ho("NONE",0),ny=new ho("ALL_JSON_OBJECTS",1),ey=new ho("POLYMORPHIC",2)}var ry,ny,ey;function ty(){return Lf(),ry}function DI(){return Lf(),ny}function iy(){return Lf(),ey}function LI(){return pe(),ay}var ay,Pf,tc;function jr(n){pe();var r=n instanceof nr?n:null,e;return r==null?Rf(n,"JsonObject"):e=r,e}function re(n){return pe(),n==null?Zs():new ut(n,!0)}function us(n){pe();var r=n instanceof fn?n:null,e;return r==null?Rf(n,"JsonArray"):e=r,e}var ll;function Zs(){return ll===l&&new ce,ll}function Bn(n){pe();var r;return n instanceof ce?r=null:r=n.w17(),r}function An(n){pe();var r=n instanceof fr?n:null,e;return r==null?Rf(n,"JsonPrimitive"):e=r,e}function PI(n){pe();var r;try{r=ra(n)}catch(t){var e;if(t instanceof Ur)e=null;else throw t;r=e}return r}function MI(n){pe();var r;try{r=ra(n)}catch(o){var e;if(o instanceof Ur)e=null;else throw o;r=e}var t=r,i;if(t==null)return null;i=t;var a=i,s=Me(-2147483648,2147483647);return so(E(s,ea)?s:g(),a)?Xr(a):null}function Mf(n){return pe(),UC(n.w17())}function Rf(n,r){throw pe(),U.v("Element "+b(Dr(n))+" is not a "+r)}function ra(n){return pe(),Vf(Ie(),n.w17()).h18()}function RI(n){pe();var r=n.w17();return zo(r)}function BI(n){return pe(),zo(n.w17())}var Ih;function pe(){Ih||(Ih=!0,ay=Hs("kotlinx.serialization.json.JsonUnquotedLiteral",bs()))}function ul(n,r,e){return n.j18(r,re(e))}function FI(n){return n.zo("JsonPrimitive",Qa($I)),n.zo("JsonNull",Qa(JI)),n.zo("JsonLiteral",Qa(HI)),n.zo("JsonObject",Qa(GI)),n.zo("JsonArray",Qa(KI)),or}function $I(){return Bf().m18_1}function JI(){return $f().n18_1}function HI(){return sy().o18_1}function GI(){return tu().p18_1}function KI(){return Ff().q18_1}var ic;function ct(){return ic===l&&new Nm,ic}var ac;function Bf(){return ac===l&&new Dm,ac}var sc;function WI(){return sc===l&&new Lm,sc}var oc;function Ff(){return oc===l&&new Pm,oc}var lc;function YI(){return lc===l&&new Mm,lc}var uc;function tu(){return uc===l&&new Rm,uc}var cc;function $f(){return cc===l&&new Bm,cc}function Qa(n){return new Ks(n)}var fc;function sy(){return fc===l&&new Fm,fc}function La(n){ZI(n)}function iu(n){var r=E(n,nu)?n:null,e;if(r==null)throw xr.o3("This serializer can be used only with Json format."+("Expected Decoder to be JsonDecoder, got "+b(Dr(n))));return e=r,e}function Jf(n){iu(n)}function ZI(n){var r=E(n,qf)?n:null,e;if(r==null)throw xr.o3("This serializer can be used only with Json format."+("Expected Encoder to be JsonEncoder, got "+b(Dr(n))));return e=r,e}function Je(n){var r=n.p19_1,e=Si;return xa("original",1,e,VI(),null),r.l2()}function VI(){return Fe(n=>Je(n),1,0,5)}function XI(n,r){return r.h15_1.c17_1?new $m(n,r):new Ys(n)}function QI(n,r,e){return n.o1b_1=!r.mo(e)&&r.lo(e).eo(),n.o1b_1}function rC(n){return Fe((r,e)=>{var t=n;return QI(t,r,e)},2,0,6,"readIfAbsent",[n])}function Jr(n,r){if(r=r===l?-1:r,C(n)<200)return n;if(r===-1){var e=C(n)-60|0;if(e<=0)return n;var t=C(n);return"....."+b(Un(n,e,t))}var i=r-30|0,a=r+30|0,s=i<=0?"":".....",o=a>=C(n)?"":".....",u=vn(i,0),c=zt(a,C(n));return s+b(Un(n,u,c))+o}function Kr(n,r,e,t,i){return Gf(n,r,e,t,i)}function Hf(n,r){return r=r===l?null:r,Ur.g19(Gf(-1,n,null,r,null),n,-1,null,null,r)}function Ui(n,r){r=r===l?"object":r,n.r1b("Trailing comma before the end of JSON "+r,n.y15_1-1|0,"Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.")}function Ch(n,r){n.s1b(Kf(r,null),l,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function oy(n){return Ws.h1a("Value of type '"+n.co()+"' can't be used in JSON as a key in the map. "+("It should have either primitive or enum kind, but its kind is '"+n.do().toString()+"'"),n.co(),"Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.")}function Ah(n,r){return r=r===l?null:r,Ws.h1a(Kf(n,r),l,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function Th(n,r){return Kf(n,r)}function Gf(n,r,e,t,i){var a=rn.f();return n>=0&&a.ca("Unexpected JSON token at offset "+n+": "),a.ca(r),e==null||lt(e)||(a.ca(" at path: "),a.ca(e)),t==null||lt(t)||a.ca(`
`+t),i!=null&&(a.ca(`
JSON input: `),a.ca(i)),a.toString()}function Kf(n,r){return"Unexpected special floating-point value "+b(n)+(r!=null?" with key "+r+". ":". ")+"By default, non-finite floating point values are prohibited because they do not conform JSON specification."}function nC(n,r,e,t,i,a){var s;n.x15_1.p17_1?s=b(Jr(a,e)):s=null;var o=s;return Ur.g19(Gf(e,r,t,i,o),r,e,t,o,i)}function eC(n,r){var e;return r==null||lt(r)?e="":e=`
`+r,n+e}function tC(){return Ae(),ly}var ly;function iC(){return Ae(),uy}var uy;function Wf(n,r){Ae();var e;if(r.h15_1.z16_1)e=!0;else{var t=n.ho(),i;r:{var a;if(E(t,W)?a=t.i1():a=!1,a){i=!1;break r}for(var s=t.x();s.y();){var o=s.z();if(o instanceof Tm){i=!0;break r}}i=!1}e=i}return e}function au(n,r,e){if(Ae(),cy(r,n)){var t=e.toLowerCase();return qu(n,r,t)}var i=su(n,r);if(i!=null)return qu(n,r,e);var a=n.jo(e);return a!==-3||!r.h15_1.j17_1?a:qu(n,r,e)}function aC(n,r,e){Ae();var t=su(n,r);return t==null?n.io(e):fy(n,r,t)[e]}function sC(n,r){Ae();var e=su(n,r);return e==null?Nz(n):Up(fy(n,r,e))}function cy(n,r){return Ae(),n.h15_1.l17_1&&P(r.do(),ji())}function qu(n,r,e){Ae();var t=oC(r,n).o2(e);return t??-3}function su(n,r){return Ae(),P(n.do(),Xl())?r.h15_1.k17_1:null}function fy(n,r,e){Ae();var t=Sy(r),i=iC();return t.u1b(n,i,uC(n,e))}function oC(n,r){Ae();var e=Sy(n),t=tC();return e.u1b(r,t,cC(r,n))}function lC(n,r){Ae();var e=vr.q4(),t=cy(r,n),i=su(n,r),a=0,s=n.go();if(a<s)do{var o=a;a=a+1|0;for(var u=n.ko(o),c=T.m(),f=u.x();f.y();){var v=f.z();v instanceof qm&&c.n(v)}var h=Lc(c),d=h==null?null:h.v1b_1;if(d!=null)for(var _=0,m=d.length;_<m;){var w=d[_];_=_+1|0;var x;t?x=w.toLowerCase():x=w,qh(e,n,x,o)}var k;t?k=n.io(o).toLowerCase():i!=null?k=i.w1b(n,o,n.io(o)):k=null;var S=k;S==null||qh(e,n,S,o)}while(a<s);var z;return e.i1()?z=Tr():z=e,z}function uC(n,r){return()=>{for(var e=Tn.e1(),t=0,i=n.go(),a=Array(i);t<i;){var s=t,o=n.io(s),u=r.w1b(n,s,o);if(!e.n(u))throw Ws.h1a("The transformed name '"+u+"' for property "+o+" already exists "+("in "+b(n)),n.co());a[s]=u,t=t+1|0}return a}}function cC(n,r){return()=>lC(n,r)}function qh(n,r,e,t){var i=P(r.do(),ji())?"enum value":"property";if((E(n,mn)?n:g()).m2(e))throw Hf("The suggested name '"+e+"' for "+i+" "+r.io(t)+" is already one of the names for "+i+" "+(r.io(Se(n,e))+" in "+b(r)));n.s2(e,t)}var Oh;function Ae(){Oh||(Oh=!0,ly=new ma,uy=new ma)}var vc,hc;function jh(n){var r=Gs(n.b1c_1,2);n.z1b_1=d_(n.z1b_1,r);for(var e=0,t=new Int32Array(r);e<r;)t[e]=-1,e=e+1|0;var i=t,a=n.a1c_1,s=a.length,o=a;Rk(o,i,0,0,s),n.a1c_1=i}function fC(n,r,e){var t=r.do(),i;if(t instanceof Oa?i=!0:i=P(t,dm()),i)throw U.v("Serializer for "+e.oc()+" can't be registered as a subclass for polymorphic serialization "+("because its kind "+t.toString()+" is not concrete. To work with multiple hierarchies, register it as a base class."));if(n.i1c_1||!n.j1c_1)return or;var a,s;if(P(t,Js())||P(t,Ql())?s=!0:s=t instanceof Hn,s?a=!0:a=t instanceof Gl,a)throw U.v("Serializer for "+e.oc()+" of kind "+t.toString()+" cannot be serialized polymorphically with class discriminator.")}function vC(n,r,e,t){var i=ou(),a=mC().c1(),s=Array(a),o=ua.t1c(r,n,i,s);o.rr(e,t)}function hC(n){var r=n.u1c_1.z1c(6);n.u1c_1.a1d()===4&&n.u1c_1.s1b("Unexpected leading comma");var e=vr.q4();r:for(;n.u1c_1.b1d();){var t=n.v1c_1?n.u1c_1.d1d():n.u1c_1.c1d();n.u1c_1.z1c(5);var i=n.e1d();e.s2(t,i),r=n.u1c_1.f1d();var a=r;if(a!==4){if(a===7)break r;n.u1c_1.s1b("Expected end of the object or comma")}}return r===6?n.u1c_1.z1c(7):r===4&&(n.w1c_1||Ui(n.u1c_1),n.u1c_1.z1c(7)),new nr(e)}function*dC(n,r,e){var t=n.u1c_1.z1c(6);n.u1c_1.a1d()===4&&n.u1c_1.s1b("Unexpected leading comma");var i=vr.q4();r:for(;n.u1c_1.b1d();){var a=n.v1c_1?n.u1c_1.d1d():n.u1c_1.c1d();n.u1c_1.z1c(5);var s=yield*r.tk(or,e);i.s2(a,s),t=n.u1c_1.f1d();var o=t;if(o!==4){if(o===7)break r;n.u1c_1.s1b("Expected end of the object or comma")}}return t===6?n.u1c_1.z1c(7):t===4&&(n.w1c_1||Ui(n.u1c_1),n.u1c_1.z1c(7)),new nr(i)}function vy(n){var r=n.u1c_1.f1d();n.u1c_1.a1d()===4&&n.u1c_1.s1b("Unexpected leading comma");var e=T.m();r:for(;n.u1c_1.b1d();){var t=n.e1d();if(e.n(t),r=n.u1c_1.f1d(),r!==4){var i=n.u1c_1,a=r===9,s=i.y15_1;if(!a){var o="Expected end of the array or comma";i.s1b(o,s)}break r}}return r===8?n.u1c_1.z1c(9):r===4&&(n.w1c_1||Ui(n.u1c_1,"array"),n.u1c_1.z1c(9)),new fn(e)}function cl(n,r){var e;n.v1c_1||!r?e=n.u1c_1.d1d():e=n.u1c_1.c1d();var t=e;return!r&&t==="null"?Zs():new ut(t,r)}function pC(n){return LS(new wp(_C(n)),or)}function _C(n){return Fe((r,e,t)=>_k(t,function*(i){var a=n.u1c_1.a1d(),s;if(a===1)s=cl(n,!0);else if(a===0)s=cl(n,!1);else if(a===6){var o=n;o.y1c_1=o.y1c_1+1|0,o.y1c_1>=o.x1c_1&&xs(o.x1c_1);var u=yield*dC(n,r,i);o.y1c_1=o.y1c_1-1|0,s=u}else if(a===8){var c=n;c.y1c_1=c.y1c_1+1|0,c.y1c_1>=c.x1c_1&&xs(c.x1c_1);var f=vy(n);c.y1c_1=c.y1c_1-1|0,s=f}else n.u1c_1.s1b("Can't begin reading element, unexpected token");return s}),2)}function xs(n){throw Hf("Json input is too nested and may be impossible to parse without stack overflow.","Current nesting limit is "+n+". To adjust it, use 'maxNestingDepth' in 'Json {}' builder.")}var Uh;function Pa(){if(Uh)return or;Uh=!0,hy=new rs("OBJ",0,123,125),dy=new rs("LIST",1,91,93),py=new rs("MAP",2,123,125),_y=new rs("POLY_OBJ",3,91,93)}var hy,dy,py,_y;function gC(){return Pa(),[ou(),dc(),vl(),my()]}function mC(){return Pa(),Ou==null&&(Ou=C2(gC())),Ou}var Ou;function gy(n,r){var e=r.do(),t;if(e instanceof Oa)t=my();else if(P(e,Js()))t=dc();else if(P(e,Ql())){var i=fl(r.lo(0),n.pq()),a=i.do(),s,o;if(a instanceof Hn?o=!0:o=P(a,ji()),o)s=vl();else if(n.h15_1.b17_1)s=dc();else throw oy(i);t=s}else t=ou();return t}function fl(n,r){var e;if(P(n.do(),dm())){var t=fz(r,n),i=t==null?null:fl(t,r);e=i??n}else n.fo()?e=fl(n.lo(0),r):e=n;return e}function ou(){return Pa(),hy}function dc(){return Pa(),dy}function vl(){return Pa(),py}function my(){return Pa(),_y}function hl(n,r){for(var e=n.ho().x();e.y();){var t=e.z();if(t instanceof Am)return t.k1d_1}return r.h15_1.h17_1}function yC(n,r,e,t){return bC(n,r,e,t)}function wC(n){if(n instanceof Gl){var r="Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw xr.o3(b(r))}if(n instanceof Hn){var e="Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw xr.o3(b(e))}if(n instanceof Oa){var t="Actual serializer for polymorphic cannot be polymorphic itself";throw xr.o3(b(t))}}function bC(n,r,e,t){if(sC(e.dn(),n).l1(t)){var i=r.dn().co(),a=e.dn().co(),s=n.h15_1.o17_1.equals(DI())&&i===a?"in ALL_JSON_OBJECTS class discriminator mode":"as base class '"+i+"'",o="Class '"+a+"' cannot be serialized "+s+" because"+(" it has property name that conflicts with JSON class discriminator '"+t+"'."),u="You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.";throw Ws.h1a(o,a,u)}}function kC(n,r,e){return r==null?!1:r.n1d_1===e?(r.n1d_1=null,!0):!1}function xC(n,r){for(;n.rq(r)!==-1;);}function SC(n){n.r15_1.a1d()===4&&n.r15_1.s1b("Unexpected leading comma")}function EC(n){var r=!1,e=!!(n.t15_1%2|0);e?n.t15_1!==-1&&(r=n.r15_1.p1d()):n.r15_1.o1d(58);var t;if(n.r15_1.b1d()){if(e)if(n.t15_1===-1){var i=n.r15_1,a=!r,s=i.y15_1;if(!a){var o="Unexpected leading comma";i.s1b(o,s)}}else{var u=n.r15_1,c=r,f=u.y15_1;if(!c){var v="Expected comma after the key-value pair";u.s1b(v,f)}}n.t15_1=n.t15_1+1|0,t=n.t15_1}else r&&!n.p15_1.h15_1.m17_1&&Ui(n.r15_1),t=-1;return t}function zC(n,r,e){var t=n.p15_1,i;r:{var a=r.mo(e),s=r.lo(e),o;if(a&&!s.eo()?o=n.r15_1.q1d(!0):o=!1,o){i=!0;break r}if(P(s.do(),ji())){var u;if(s.eo()?u=n.r15_1.q1d(!1):u=!1,u){i=!1;break r}var c=n.r15_1.r1d(n.v15_1.a17_1),f;if(c==null){i=!1;break r}else f=c;var v=f,h=au(s,t,v),d=!t.h15_1.d17_1&&s.eo();if(h===-3&&(a||d)){n.r15_1.c1d(),i=!0;break r}}i=!1}return i}function IC(n,r){for(var e=n.r15_1.p1d();n.r15_1.b1d();){e=!1;var t=TC(n);n.r15_1.o1d(58);var i=au(r,n.p15_1,t),a;if(i!==-3){var s;if(n.v15_1.f17_1&&zC(n,r,i))e=n.r15_1.p1d(),s=!1;else{var o=n.w15_1;return o==null||o.p1b(i),i}a=s}else a=!0;var u=a;u&&(e=CC(n,r,t))}e&&!n.p15_1.h15_1.m17_1&&Ui(n.r15_1);var c=n.w15_1,f=c==null?null:c.q1b();return f??-1}function CC(n,r,e){return Wf(r,n.p15_1)||kC(n,n.u15_1,e)?n.r15_1.t1d(n.v15_1.a17_1):(n.r15_1.z15_1.g1c(),n.r15_1.s1d(e)),n.r15_1.p1d()}function AC(n){var r=n.r15_1.p1d(),e;return n.r15_1.b1d()?(n.t15_1!==-1&&!r&&n.r15_1.s1b("Expected end of the array or comma"),n.t15_1=n.t15_1+1|0,e=n.t15_1):(r&&!n.p15_1.h15_1.m17_1&&Ui(n.r15_1,"array"),e=-1),e}function TC(n){var r;return n.v15_1.a17_1?r=n.r15_1.v1d():r=n.r15_1.u1d(),r}function qC(){return Zf(),yy}var yy;function OC(n,r,e){n.k1c_1.m1a(),n.fr(r),n.k1c_1.p1a(58),n.k1c_1.o1a(),n.fr(e)}function Yf(n){return Zf(),n.fo()&&qC().l1(n)}function jC(n){return Zf(),n.fo()&&P(n,LI())}var Nh;function Zf(){Nh||(Nh=!0,yy=ii([yf(Fl()).dn(),Zl(Ps()).dn(),wf(Bl()).dn(),bf($l()).dn()]))}function ju(){return lu(),wy}var wy;function io(n){lu();var r=n&15,e;if(r<10){var t=48,i=Z(t);e=We(r+i|0)}else{var a=r-10|0,s=97,o=Z(s);e=We(a+o|0)}return e}function dl(n,r){lu(),n.da(34);var e=0,t=0,i=r.length;if(t<i)do{var a=t;t=t+1|0;var s=K(r,a),o=Z(s);o<ju().length&&ju()[o]!=null&&(n.yd(r,e,a),n.ca(ju()[o]),e=a+1|0)}while(t<i);e!==0?n.yd(r,e,r.length):n.ca(r),n.da(34)}function UC(n){return lu(),Yv(n,"true",!0)?!0:Yv(n,"false",!0)?!1:null}var Dh;function lu(){if(!Dh){Dh=!0;var n=Array(93),r=0;if(r<=31)do{var e=r;r=r+1|0;var t=io(e>>12),i=io(e>>8),a=io(e>>4),s=io(e);n[e]="\\u"+yr(t)+yr(i)+yr(a)+yr(s)}while(r<=31);var o=34;n[Z(o)]='\\"';var u=92;n[Z(u)]="\\\\";var c=9;n[Z(c)]="\\t";var f=8;n[Z(f)]="\\b";var v=10;n[Z(v)]="\\n";var h=13;n[Z(h)]="\\r",n[12]="\\f",wy=n;var d=new Int8Array(128),_=0;if(_<=31)do{var m=_;_=_+1|0,d[m]=1}while(_<=31);var w=34,x=Z(w),k=34,S=Z(k);d[x]=Mn(S);var z=92,I=Z(z),A=92,q=Z(A);d[I]=Mn(q);var N=9,$=Z(N),O=116,L=Z(O);d[$]=Mn(L);var H=8,B=Z(H),F=98,R=Z(F);d[B]=Mn(R);var X=10,J=Z(X),er=110,Y=Z(er);d[J]=Mn(Y);var G=13,sr=Z(G),ur=114,Q=Z(ur);d[sr]=Mn(Q);var Er=102,zr=Z(Er);d[12]=Mn(zr)}}function by(n,r,e,t){var i=t.dn();return new Da(n,e,i,r,i).bq(t)}function qn(n,r,e,t){var i=ze(e,"i")?"an "+e:"a "+e,a="Failed to parse literal '"+r.toString()+"' as "+i+" value",s=n.j1e(t),o;if(n.r17().h15_1.p17_1){var u=b(n.k1e());o=b(Jr(u))}else o=null;var c=o;throw Ur.g19(Kr(-1,a,s,null,c),a,-1,s,c,null)}function NC(n,r,e,t){var i=n.r17(),a;r:{var s=r.mo(e),o=r.lo(e),u;if(s&&!o.eo()?u=t instanceof ce:u=!1,u){a=!0;break r}if(P(o.do(),ji())){var c;if(o.eo()?c=t instanceof ce:c=!1,c){a=!1;break r}var f=t instanceof fr?t:null,v=f==null?null:Bn(f),h;if(v==null){a=!1;break r}else h=v;var d=h,_=au(o,i,d),m=!i.h15_1.d17_1&&o.eo();if(_===-3&&(s||m)){a=!0;break r}}a=!1}return a}function DC(n,r){var e="Encountered an unknown key '"+r+"'",t=n.q13(),i="Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.",a;if(n.r17().h15_1.p17_1){var s=n.l2().toString();a=b(Jr(s))}else a=null;var o=a;throw Ur.g19(Kr(-1,e,t,i,o),e,-1,t,o,i)}function LC(n,r,e){return n.o1g(r,e),MC(n,e+1|0)}function Uu(n,r,e){n.o1g(r,e);var t=n.b16_1.toString();return n.b16_1.de(0),t}function Lh(n){var r=un(n.a16_1);return n.a16_1=null,r}function PC(n){return rr(n.p1g(),n.y15_1-1|0)!==34}function MC(n,r){var e=r;e=n.q1g(e),e===-1&&n.s1b("Expected escape sequence to continue, got EOF");var t=n.p1g(),i=e;e=i+1|0;var a=rr(t,i);if(a===117)return ky(n,n.p1g(),e);var s=Z(a),o=FC(s);return o===0&&n.s1b("Invalid escaped char '"+yr(a)+"'"),n.b16_1.da(o),e}function ky(n,r,e){return(e+4|0)>=C(r)?(n.y15_1=e,n.r1g(),(n.y15_1+4|0)>=C(r)&&n.s1b("Unexpected EOF during unicode escape"),ky(n,r,n.y15_1)):(n.b16_1.da(We((((ao(n,r,e)<<12)+(ao(n,r,e+1|0)<<8)|0)+(ao(n,r,e+2|0)<<4)|0)+ao(n,r,e+3|0)|0)),e+4|0)}function ao(n,r,e){var t=rr(r,e),i;if(48<=t&&t<=57){var a=Z(t),s=48;i=a-Z(s)|0}else if(97<=t&&t<=102){var o=Z(t),u=97;i=(o-Z(u)|0)+10|0}else if(65<=t&&t<=70){var c=Z(t),f=65;i=(c-Z(f)|0)+10|0}else n.s1b("Invalid toHexChar char '"+yr(t)+"' in unicode escape");return i}function RC(n,r){var e=n.q1g(r);(e>=C(n.p1g())||e===-1)&&n.s1b("EOF");var t=n.p1g(),i=e;e=i+1|0;var a=rr(t,i),s=Z(a)|32,o,u=116;if(s===Z(u))Ph(n,"rue",e),o=!0;else{var c=102;s===Z(c)?(Ph(n,"alse",e),o=!1):n.s1b("Expected valid boolean literal prefix, but had '"+n.d1d()+"'")}return o}function Ph(n,r,e){(C(n.p1g())-e|0)<r.length&&n.s1b("Unexpected end of boolean literal");var t=0,i=C(r)-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=K(r,a),o=rr(n.p1g(),e+a|0),u=Z(s);u!==(Z(o)|32)&&n.s1b("Expected valid boolean literal prefix, but had '"+n.d1d()+"'")}while(t<=i);n.y15_1=e+r.length|0}function BC(n,r){var e;switch(r){case!1:var t=-Zn(n);e=Math.pow(10,t);break;case!0:var i=Zn(n);e=Math.pow(10,i);break;default:Ts();break}return e}function Ge(n){var r;if(Z(n)<126){var e=xy().y1g_1;r=e[Z(n)]}else r=0;return r}function pl(n){return n===1?`quotation mark '"'`:n===2?"string escape sequence '\\'":n===4?"comma ','":n===5?"colon ':'":n===6?"start of the object '{'":n===7?"end of the object '}'":n===8?"start of the array '['":n===9?"end of the array ']'":n===10?"end of the input":n===127?"invalid token":"valid token"}function FC(n){return n<117?xy().x1g_1[n]:0}function $C(n){var r=0;if(r<=31)do{var e=r;r=r+1|0,ti(n,e,117)}while(r<=31);ti(n,8,98),ti(n,9,116),ti(n,10,110),ti(n,12,102),ti(n,13,114),Nu(n,47,47),Nu(n,34,34),Nu(n,92,92)}function JC(n){var r=0;if(r<=32)do{var e=r;r=r+1|0,Zi(n,e,127)}while(r<=32);Zi(n,9,3),Zi(n,10,3),Zi(n,13,3),Zi(n,32,3),gt(n,44,4),gt(n,58,5),gt(n,123,6),gt(n,125,7),gt(n,91,8),gt(n,93,9),gt(n,34,1),gt(n,92,2)}function ti(n,r,e){if(e!==117){var t=Z(e);n.x1g_1[t]=We(r)}}function Nu(n,r,e){var t=Z(r);return ti(n,t,e)}function Zi(n,r,e){n.y1g_1[r]=e}function gt(n,r,e){var t=Z(r);return Zi(n,t,e)}var pc;function xy(){return pc===l&&new Xm,pc}function Vf(n,r){return n.h15_1.n17_1?new Qm(r,n.h15_1):new Df(r,n.h15_1)}function Sy(n){return n.j15_1}function Mh(n){return fs.l7(n)}p(Af,"Json");D(zm,"Default");p(Im,"JsonBuilder");p(Cm,"JsonImpl");p(Am,"JsonClassDiscriminator");p(Tm,"JsonIgnoreUnknownKeys");p(qm,"JsonNames");p(Tf,"JsonConfiguration");p(ho,"ClassDiscriminatorMode");Mr(nu,"JsonDecoder",l,l,[Kl,Wl]);Qr(Om);p(Ye,"JsonElement",l,l,l,l,l,{0:ct});Qr(OI);p(fr,"JsonPrimitive",l,l,l,l,l,{0:Bf});Qr(jI);p(fn,"JsonArray",l,l,[En],l,l,{0:Ff});Qr(jm);p(nr,"JsonObject",l,l,[mn],l,l,{0:tu});D(ce,"JsonNull",l,l,l,l,l,{0:$f});p(ut,"JsonLiteral");p(wt,"JsonObjectBuilder");p(Um,"JsonArrayBuilder");D(Nm,"JsonElementSerializer",l,l,[cr]);D(Dm,"JsonPrimitiveSerializer",l,l,[cr]);D(Lm,"JsonArrayDescriptor",l,l,[he]);D(Pm,"JsonArraySerializer",l,l,[cr]);D(Mm,"JsonObjectDescriptor",l,l,[he]);D(Rm,"JsonObjectSerializer",l,l,[cr]);D(Bm,"JsonNullSerializer",l,l,[cr]);D(Fm,"JsonLiteralSerializer",l,l,[cr]);Lr(Ks).eo=Ai;Lr(Ks).fo=Ti;Lr(Ks).ho=Ms;p(Ks,l,l,l,[he]);Mr(qf,"JsonEncoder",l,l,[df]);p(Of,"JsonException");p(Ur,"JsonDecodingException");p(Ws,"JsonEncodingException");p(Ys,"Composer");p(X1,"ComposerForUnsignedNumbers");p(Q1,"ComposerForUnquotedLiterals");p($m,"ComposerWithPrettyPrint");p(jf,"JsonElementMarker");D(Jm,"Tombstone");D(Hm,"RedactedKey");p(Gm,"JsonPath");Lr(Uf).d15=HE;p(Uf,"JsonSerializersModuleValidator",l,l,[om]);p(Km,"JsonTreeReader",l,l,l,[1]);p(rs,"LexerMode");p(ma,"Key",ma);p(rc,"DescriptorSchemaCache",rc);p(Wm,"DiscriminatorHolder");p(ks,"StreamingJsonDecoder",l,l,[nu]);p(Nf,"JsonDecoderForUnsignedTypes");p(ua,"StreamingJsonEncoder",l,l,[qf]);p(eu,"AbstractJsonTreeDecoder",l,l,[nu]);p(Da,"JsonTreeDecoder");p(nc,"JsonTreeListDecoder");p(Ym,"JsonPrimitiveDecoder");p(Zm,"JsonTreeMapDecoder");p(Vm,"AbstractJsonLexer");D(Xm,"CharMappings");p(Df,"StringJsonLexer");p(Qm,"StringJsonLexerWithComments");p(ec,"StringJsonWriter",ec);Pf=new Om;tc=new jm;vc=new Jm;hc=new Hm;var Rh=Math.imul;class Ey{constructor(r){this.v1h_1=r}zf(r,e){return this.v1h_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.v1h_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class zy{constructor(r){this.w1h_1=r}zf(r,e){return this.w1h_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.w1h_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class _c{constructor(r,e,t){this.l1j_1=r,this.m1j_1=e,this.n1j_1=t}}class Iy{constructor(r,e){this.d1k_1=r,this.e1k_1=e}}class Cy{constructor(r,e,t,i,a,s,o,u,c,f,v){this.f1k_1=r,this.g1k_1=e,this.h1k_1=t,this.i1k_1=i,this.j1k_1=a,this.k1k_1=s,this.l1k_1=o,this.m1k_1=u,this.n1k_1=c,this.o1k_1=f,this.p1k_1=v}}class Ay{constructor(r,e,t){this.q1k_1=r,this.r1k_1=e,this.s1k_1=t}}class Ty{constructor(r){this.t1k_1=r}zf(r,e){return this.t1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.t1k_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class qy{constructor(r){this.u1k_1=r}zf(r,e){return this.u1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.u1k_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class Oy{constructor(r){this.v1k_1=r}zf(r,e){return this.v1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.v1k_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class jy{constructor(r){this.w1k_1=r}zf(r,e){return this.w1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.w1k_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class Uy{constructor(r){this.c1l_1=r}r4(){return this.c1l_1.x()}d1l(r){return Rn(r.e1k_1)}s4(r){return this.d1l(r)}}class Ny{constructor(r,e,t,i,a,s,o,u,c,f,v,h,d,_,m){e=e===l?dr():e,t=t===l?null:t,i=i===l?dr():i,a=a===l?dr():a,s=s===l?dr():s,o=o===l?dr():o,u=u===l?dr():u,c=c===l?null:c,f=f===l?null:f,v=v===l?dr():v,h=h===l?dr():h,d=d===l?null:d,_=_===l?null:_,m=m===l?null:m,this.z1h_1=e,this.a1i_1=t,this.b1i_1=a,this.c1i_1=s,this.d1i_1=o,this.e1i_1=c,this.f1i_1=f,this.g1i_1=v,this.h1i_1=h,this.i1i_1=d,this.j1i_1=_,this.k1i_1=m,this.l1i_1=u;for(var w=this,x=this.e1i_1,k=x==null?null:x.e1j_1,S=this.i1i_1,z=st([this.a1i_1,k,S==null?null:S.h1j_1]),I=T.g1(Zr(z,10)),A=z.x();A.y();){var q=A.z(),N=Ie().m15(q);I.n(N)}w.m1i_1=I;for(var $=this,O=T.m(),L=u.x();L.y();){var H=L.z();H.t1h_1||O.n(H)}$.n1i_1=O,this.o1i_1=Tr();var B=this,F;if(!this.n1i_1.i1())F=!0;else{var R;r:{var X;if(E(u,W)?X=u.i1():X=!1,X){R=!1;break r}for(var J=u.x();J.y();){var er=J.z();if(er.u1h_1!=null){R=!0;break r}}R=!1}F=R}B.p1i_1=F,this.q1i_1=it(i);for(var Y=this,G=T.g1(Zr(r,10)),sr=r.x();sr.y();){var ur=sr.z(),Q="/"+lg(ur,ba([47]));G.n(Q)}Y.r1i_1=G,this.s1i_1=Tr(),this.t1i_1=!1,this.u1i_1=!1;var Er=this;Er.v1i_1=Tn.e1();var zr=this;zr.w1i_1=T.m(),this.x1i_1=Tr()}e1l(r,e){this.x1i_1=e;var t=jr(Ie().m15(r)),i=y5(this,m5(this,g5(this,t))),a=ar(i,"components"),s=a==null?null:ar(a,"schemas"),o=s??Tr();this.o1i_1=o,this.s1i_1=L5(this,i,o);var u=this,c;if(yl(i))c=!0;else{var f=this.m1i_1,v;r:{var h;if(E(f,W)?h=f.i1():h=!1,h){v=!1;break r}for(var d=f.x();d.y();){var _=d.z();if(yl(_)){v=!0;break r}}v=!1}c=v}u.t1i_1=c;var m=this,w;if(ml(i,_o()))w=!0;else{var x=this.m1i_1,k;r:{var S;if(E(x,W)?S=x.i1():S=!1,S){k=!1;break r}for(var z=x.x();z.y();){var I=z.z();if(ml(I,_o())){k=!0;break r}}k=!1}w=k}m.u1i_1=w;var A=Ee(this.t1i_1?Xy().q2():dr(),this.u1i_1?_o().q2():dr());this.v1i_1.v2(),this.w1i_1.v2();for(var q=q5(this,o)+x5(this,o)+z5(this,o)+I5(this,o),N=o.p2(),$=T.g1(Zr(N,10)),O=N.x();O.y();){var L=O.z(),H=Rn(L);$.n(H)}for(var B=$,F=ar(i,"paths"),R=(F??Tr()).p2(),X=T.g1(Zr(R,10)),J=R.x();J.y();){var er=J.z(),Y=gw(this,er);X.n(Y)}var G=Ee(Ee(B,X),rv());if(!(this.d1i_1.i1()||!G.l1("ErrorCode"))){var sr="errorCodes would be exported as 'ErrorCode', which a class of your API is already called. Rename that class.";throw xr.o3(b(sr))}if(!(this.e1i_1==null||!G.l1("CurrentUser")&&!G.l1("currentUser"))){var ur="currentUser exports 'currentUser' and 'CurrentUser', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw xr.o3(b(ur))}if(!(this.g1i_1.i1()||this.e1i_1!=null)){var Q="permissions needs currentUser, which says who the permissions belong to.";throw xr.o3(b(Q))}if(!(this.g1i_1.i1()||!G.l1("Permission")&&!G.l1("can"))){var Er="permissions exports 'Permission' and 'can', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw xr.o3(b(Er))}if(!(this.i1i_1==null||!G.l1("UserPreferences")&&!G.l1("preferences"))){var zr="preferences exports 'preferences' and 'UserPreferences', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw xr.o3(b(zr))}if(!(this.h1i_1.i1()||this.e1i_1!=null)){var mr="guards needs currentUser, which says who is signed in.";throw xr.o3(b(mr))}var Ir;if(this.h1i_1.i1())Ir=!0;else{var br=$h(),Cr;r:{var Pr;if(E(br,W)?Pr=br.i1():Pr=!1,Pr){Cr=!0;break r}for(var pr=br.x();pr.y();){var Yr=pr.z();if(G.l1(Yr)){Cr=!1;break r}}Cr=!0}Ir=Cr}if(!Ir){var an="guards exports "+V($h())+", and the generated client already uses one of the names.";throw xr.o3(b(an))}if(!(this.n1i_1.i1()||!G.l1("cookies"))){var Gr="cookies(...) would be exported as 'cookies', which the generated client already uses for the routes under /cookies.";throw xr.o3(b(Gr))}if(!(By(this.l1i_1).i1()||!G.l1("cookieConsent"))){var _r="Cookies with a category export 'cookieConsent', which the generated client already uses for the routes under /cookie-consent.";throw xr.o3(b(_r))}for(var Rr=this.n1i_1,$r=vr.q4(),nn=Rr.x();nn.y();){var Br=nn.z(),sn=gc(Br.l1h_1),on=$r.o2(sn),pn;if(on==null){var yn=T.m();$r.s2(sn,yn),pn=yn}else pn=on;var _e=pn;_e.n(Br)}var Ln=$r.q2(),Gn;r:{for(var ge=Ln.x();ge.y();){var Pn=ge.z();if(Pn.c1()>1){Gn=Pn;break r}}Gn=null}var me=Gn;if(me!=null){var Te="The cookies "+V(me," and ",l,l,l,l,Q5)+" would both be called "+gc(Sb(me).l1h_1)+" in TypeScript.";throw xr.o3(b(Te))}var Ue=this.c1i_1,Ne;r:{for(var ye=Ue.x();ye.y();){var zn=ye.z();if(G.l1(zn.x1h_1)){Ne=zn;break r}}Ne=null}var xn=Ne;if(xn!=null){var In="constants("+xn.x1h_1+") would be exported as '"+xn.x1h_1+"', which the generated client already uses. Rename the object.";throw xr.o3(b(In))}var Ra=Le("client.ts")+S5(this),Nt=this.j1i_1,ft;Nt==null?ft=null:ft=`
reportErrors('`+Nt+`');
`;var vt=ft,Dt=Ra+(vt??""),Di=this.k1i_1,ht;Di==null?ht=null:ht=`
`+Di+`
`;for(var Li=ht,De=j("client.ts",Dt+(Li??"")),Ba=j("form.ts",Le("form.ts")),dt=j("form-state.svelte.ts",Le("form-state.svelte.ts")),Lt=j("pending-writes.svelte.ts",Le("pending-writes.svelte.ts")),Pi=this.d1i_1.i1()&&this.g1i_1.i1()?q:Qi(q,`export {};
`),Fa=fi(this.v1i_1),Mi=j("types.ts",Pi+V(Fa,"",l,l,l,l,r7)+F5(this)+_w(this,"Permission",this.g1i_1)),Pt=ar(i,"paths"),$a=Pt??Tr(),Ja=yo(o.p2(),"LucideIcon"),Ri=this.s1i_1.q2(),Bi=T.g1(Zr(Ri,10)),Mt=Ri.x();Mt.y();){var Rt=Mt.z(),Bt=Rt.l1j_1;Bi.n(Bt)}var Fi=j("services.ts",M5(this,$a,bv(bv(Ja,Bi),A))),$i=Le("index.ts")+(this.c1i_1.i1()?"":`export * from './constants.js';
`)+(this.p1i_1?`export * from './cookies.js';
`:"")+(this.e1i_1!=null?"export * from './"+Qi("current-user.svelte.ts",".ts")+`.js';
`:""),pt;this.h1i_1.i1()?pt="":pt="export * from './"+Qi("guards.ts",".ts")+`.js';
`;var Vs=[De,Ba,dt,Lt,Mi,Fi,j("index.ts",$i+pt+(this.i1i_1!=null?"export * from './"+Qi("preferences.svelte.ts",".ts")+`.js';
`:""))],Ft;this.c1i_1.i1()?Ft=[]:Ft=[j("constants.ts",i5(this.c1i_1))];var Ha=Ft,$t;this.p1i_1?$t=[j("cookies.ts",YC(this.l1i_1))]:$t=[];var Xs=$t,we=this.e1i_1,Ga;we==null?Ga=null:Ga=[j("current-user.svelte.ts",A5(this,we))];var Qs=Ga,Ji;Qs==null?Ji=[]:Ji=Qs;var ro=Ji,Ka;this.h1i_1.i1()?Ka=[]:Ka=[j("guards.ts",E5(this))];var no=Ka,Hi=this.i1i_1,Gi;Hi==null?Gi=null:Gi=[j("preferences.svelte.ts",C5(this,Hi))];var eo=Gi,Ki;return eo==null?Ki=[]:Ki=eo,_5(this,mk([Vs,Ha,Xs,ro,no,Ki,[j("openapi.json",Yy().k15(Pf.t17(),i)+`
`)]]))}f1l(r,e,t){return e=e===l?Tr():e,t===l?this.e1l(r,e):t.e1l.call(this,r,e)}}class po extends ae{constructor(r,e,t){super(r,e),this.z1k_1=t}p1g(){return Le(this.z1k_1)}}class uu{constructor(r,e,t){this.g1l_1=r,this.h1l_1=e,this.i1l_1=t}toString(){return"GeneratedOperation(name="+this.g1l_1+", method="+this.h1l_1+", path="+this.i1l_1+")"}hashCode(){var r=se(this.g1l_1);return r=Rh(r,31)+se(this.h1l_1)|0,r=Rh(r,31)+se(this.i1l_1)|0,r}equals(r){return this===r?!0:!(!(r instanceof uu)||this.g1l_1!==r.g1l_1||this.h1l_1!==r.h1l_1||this.i1l_1!==r.i1l_1)}}class Dy{constructor(r){this.j1l_1=r}zf(r,e){return this.j1l_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.j1l_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class Ly{v1j(r){return"Must be at least "+Xh(this,r)+"."}w1j(r){return"Must be at most "+Xh(this,r)+"."}b1k(r,e){return"Must be "+(e?"greater than":"at least")+" "+At(r)+"."}c1k(r,e){return"Must be "+(e?"less than":"at most")+" "+At(r)+"."}x1j(r){return"Must match "+r+"."}}class He{constructor(r,e){this.a1l_1=r,this.b1l_1=e}}class Vi{constructor(r,e,t){this.y1j_1=r,this.z1j_1=e,this.a1k_1=t}}class Py{constructor(){xc=this,this.o1j_1=new Vi("email",On(new He("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$","an email address")),"Must be an email address, such as name@example.com."),this.p1j_1=new Vi("uri",On(new He("^https?://[^\\s/?#.]+\\.[^\\s]+$","a web address")),"Must be a web address that starts with http:// or https://."),this.q1j_1=new Vi("phone",On(new He("^\\+?[0-9(][0-9 ()./-]{4,18}[0-9]$","a phone number")),"Must be a phone number, such as +49 30 1234567."),this.r1j_1=new Vi("slug",On(new He("^[a-z0-9]+(-[a-z0-9]+)*$","lowercase letters, digits and single dashes")),"Must be lowercase letters and digits, with single dashes between words."),this.s1j_1=new Vi("strong-password",kt([new He("^[\\s\\S]{10,}$","at least 10 characters"),new He("[a-z]","a lowercase letter"),new He("[A-Z]","an uppercase letter"),new He("[0-9]","a digit")]),"Must have at least 10 characters, a lowercase letter, an uppercase letter and a digit."),this.t1j_1=kt([this.o1j_1,this.p1j_1,this.q1j_1,this.r1j_1,this.s1j_1])}u1j(r){var e=this.t1j_1,t;r:{for(var i=e.x();i.y();){var a=i.z();if(a.y1j_1===r){t=a;break r}}t=null}return t}}function HC(){return ne(),My}var My;function GC(){return ne(),Ry}var Ry;function ee(n){return ne(),"'"+Yn(Yn(Yn(Yn(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function gc(n){ne();var r=GC(),e=lg(n,ba([46,95,45])),t=r.ye(e,ZC);return HC().ue(t)?t:ee(n)}function KC(n){ne();var r;switch(n.m1h_1){case"string":r="string";break;case"boolean":r="boolean";break;case"enum":r=V(n.n1h_1," | ",l,l,l,l,VC);break;default:r="number";break}return r}function WC(n){ne();var r=KC(n),e=n.m1h_1==="string"||n.m1h_1==="enum",t="kind: "+ee(n.m1h_1),i;n.m1h_1==="enum"?i="values: ["+V(n.n1h_1,", ",l,l,l,l,XC)+"]":i=null;var a=i,s=n.o1h_1,o;s==null?o=null:o="default: "+(e?ee(s):s);var u=o,c=n.p1h_1,f;c==null?f=null:f="maxAge: "+c.toString();var v=f,h="path: "+ee(n.q1h_1),d="sameSite: "+ee(n.r1h_1),_="secure: "+n.s1h_1,m=n.u1h_1,w;m==null?w=null:w="category: "+ee(m);var x=st([t,a,u,v,h,d,_,w]),k=n.o1h_1==null?"<"+r+">":"<"+r+", "+r+">";return"    "+gc(n.l1h_1)+": typedCookie"+k+"("+ee(n.l1h_1)+", { "+V(x,", ")+" })"}function By(n){ne();for(var r=T.m(),e=n.x();e.y();){var t=e.z(),i=t.u1h_1;i==null||r.n(i)}return fi(fa(r))}function YC(n){ne();for(var r=T.m(),e=n.x();e.y();){var t=e.z();t.t1h_1||r.n(t)}var i=QC,a=new Ey(i),s=zi(r,a),o=By(n),u="consentStore",c;o.i1()?c=null:c=u;var f=c,v="typedCookie",h;s.i1()?h=null:h=v;for(var d=h,_=st([f,d]),m=T.m(),w=s.x();w.y();){var x=w.z();x.u1h_1!=null&&m.n(x)}var k=m,S=V(k,", ",l,l,l,l,r5),z=rn.f();return z.ca("import { "+V(_,", ")+` } from './client.js';
`),s.i1()||z.ca(`
export const cookies = {
`+V(s,`,
`,l,l,l,l,n5())+`
};
`),o.i1()||z.ca(`
export const cookieConsent = consentStore([`+V(o,", ",l,l,l,l,e5)+"] as const, ["+S+`]);
`),z.toString()}function ZC(n){return ne(),n.xf().d1(1).toUpperCase()}function VC(n){return ne(),ee(n)}function XC(n){return ne(),ee(n)}function QC(n,r){ne();var e=n.l1h_1,t=r.l1h_1;return jt(e,t)}function r5(n){ne();var r=ee(n.l1h_1),e=ee(n.q1h_1),t=n.u1h_1,i=t??"";return"{ name: "+r+", path: "+e+", category: "+ee(i)+" }"}function n5(){return Fe(n=>WC(n),1,0,7,"cookieEntry")}function e5(n){return ne(),ee(n)}var Bh;function ne(){Bh||(Bh=!0,My=St.te("[A-Za-z_$][A-Za-z0-9_$]*"),Ry=St.te("[._-]+([A-Za-z0-9])"))}function t5(){return Ma(),Fy}var Fy;function Xf(n,r){Ma();var e;if(n instanceof fr)e=n.v17()?$y(n.w17()):n.w17();else if(n instanceof fn)e=V(n,", ","[","]",l,l,a5(r));else if(n instanceof nr){var t;if(n.i1())t="{}";else{var i=n.r2(),a=`
`+r+"}";t=V(i,`,
`,`{
`,a,l,l,s5(r))}e=t}else Ts();return e}function $y(n){return Ma(),"'"+Yn(Yn(Yn(Yn(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function i5(n){Ma();var r=o5,e=new zy(r),t=zi(n,e);return V(t,`
`,l,l,l,l,l5)}function a5(n){return r=>Xf(r,n)}function s5(n){return r=>{var e=r.k2(),t=r.l2();return n+"    "+(t5().ue(e)?e:$y(e))+": "+Xf(t,n+"    ")}}function o5(n,r){Ma();var e=n.x1h_1,t=r.x1h_1;return jt(e,t)}function l5(n){return Ma(),"export const "+n.x1h_1+" = "+Xf(new nr(n.y1h_1),"")+` as const;
`}var Fh;function Ma(){Fh||(Fh=!0,Fy=St.te("[A-Za-z_$][A-Za-z0-9_$]*"))}function Jy(){return wr(),Hy}var Hy;function Qf(){return wr(),Gy}var Gy;function Ky(){return wr(),Wy}var Wy;function Yy(){return wr(),Zy}var Zy;function $h(){return wr(),Vy}var Vy;function Xy(){return wr(),Qy}var Qy;function _o(){return wr(),rw}var rw;function u5(){return wr(),nw}var nw;function c5(){return wr(),ew}var ew;function f5(){return wr(),tw}var tw;function rv(){return wr(),iw}var iw;function v5(){return wr(),aw}var aw;function h5(){return wr(),sw}var sw;function d5(){return wr(),ow}var ow;function p5(){return wr(),lw}var lw;function _5(n,r){var e=Ol(r.slice());return et(e,j(".gitattributes",`# Generated by ktor-svelte. Do not edit.
`+jp(r,"",l,l,l,l,n7)))}function g5(n,r){for(var e=ar(r,"paths"),t=e??Tr(),i=vr.q4(),a=t.r2().x();a.y();){var s=a.z(),o=s.k2();T5(n,o)&&i.s2(s.k2(),s.l2())}var u=vu(i);return new nr(et(r,j("paths",new nr(u))))}function m5(n,r){if(n.b1i_1.i1())return r;for(var e=ar(r,"components"),t=e??new nr(Tr()),i=ar(t,"schemas"),a=i??Tr(),s=af(a),o=n.b1i_1.x();o.y();){var u=o.z(),c=u.y1i_1,f=s.o2(c);if(f==null){var v=Ie().m15(u.z1i_1);s.s2(c,v)}}for(var h=ar(r,"paths"),d=h??Tr(),_=vr.ha(d.c1()),m=d.r2().x();m.y();){for(var w=m.z(),x=w.k2(),k=w.l2(),S=jr(k),z=vr.ha(S.c1()),I=S.r2().x();I.y();){var A=I.z(),q=A.k2(),N=A.k2(),$=A.l2(),O,L;Jy().l1(N)?L=$ instanceof nr:L=!1,L?O=k5(n,$):O=$;var H=O;z.s2(q,H)}var B=new nr(z);_.s2(x,B)}var F=_;return new nr(et(et(r,j("paths",new nr(F))),j("components",new nr(et(t,j("schemas",new nr(s)))))))}function y5(n,r){var e=ar(r,"components"),t;if(e==null)return r;t=e;for(var i=t,a=ar(i,"schemas"),s=a??Tr(),o=vr.q4(),u=s.r2().x();u.y();){var c=u.z(),f=c.l2(),v;f instanceof nr?v=w5(n,f):v=!1,v&&o.s2(c.k2(),c.l2())}for(var h=vr.ha(o.c1()),d=o.r2().x();d.y();){var _=d.z(),m=_.k2(),w=_.l2(),x=new nr(et(jr(w),j("type",re("object"))));h.s2(m,x)}var k=h;if(k.i1())return r;for(var S=vr.q4(),z=s.r2().x();z.y();){var I=z.z(),A=I.k2();(E(k,mn)?k:g()).m2(A)||S.s2(I.k2(),I.l2())}for(var q=S.r2(),N=vn(Zr(q,10),16),$=vr.ha(N),O=q.x();O.y();){var L=O.z(),H=L.k2(),B=L.l2(),F=B instanceof nr?B:null,R=j(F==null?null:Jh(n,F),H);$.s2(R.ch_1,R.dh_1)}for(var X=$,J=vr.ha(k.c1()),er=k.r2().x();er.y();){var Y=er.z(),G=Y.k2(),sr=Y.k2(),ur=Y.l2(),Q=X.o2(Jh(n,ur)),Er=Q??sr;J.s2(G,Er)}for(var zr=J,mr=vr.q4(),Ir=s.r2().x();Ir.y();){var br=Ir.z(),Cr=br.k2();(zr.o2(Cr)==null||zr.o2(Cr)===Cr)&&mr.s2(br.k2(),br.l2())}for(var Pr=vr.ha(mr.c1()),pr=mr.r2().x();pr.y();){var Yr=pr.z(),an=Yr.k2(),Gr=Yr.k2(),_r=Yr.l2(),Rr=k.o2(Gr),$r=Rr??_r;Pr.s2(an,$r)}var nn=Pr,Br=new nr(et(i,j("schemas",new nr(nn))));return jr(kc(zr,n,new nr(et(r,j("components",Br)))))}function w5(n,r){var e;if(P(it(Ni(n,r)),ii(["object","null"]))){var t=ar(r,"properties");e=!(t??Tr()).i1()}else e=!1;return e}function Jh(n,r){return new nr(h2(r,"title"))}function b5(n,r){var e=new wt,t=new Um,i=new wt;ul(i,"$ref","#/components/schemas/"+r);var a=i.x16();t.l18(a);var s=new wt;ul(s,"type","null");var o=s.x16();t.l18(o);var u=t.x16();return e.j18("oneOf",u),e.x16()}function k5(n,r){for(var e=ar(r,"responses"),t=e??Tr(),i=af(t),a=n.b1i_1.x();a.y();){var s=a.z(),o=new wt;ul(o,"description","");var u=new wt,c="application/json",f=new wt,v=new wt;ul(v,"$ref","#/components/schemas/"+s.y1i_1);var h=v.x16();f.j18("schema",h);var d=f.x16();u.j18(c,d);var _=u.x16();o.j18("content",_);for(var m=o.x16(),w=s.a1j_1.x();w.y();){var x=w.z(),k=x.toString(),S=i.o2(k);if(S==null){var z=m;i.s2(k,z)}}}return new nr(et(r,j("responses",new nr(i))))}function x5(n,r){var e=n.a1i_1,t;if(e==null)return"";t=e;var i=t,a=jr(Ie().m15(i)),s=Tn.e1();return`
`+nv(n,"PublicConfig",a,s,r)}function S5(n){var r=n.f1i_1,e;if(r==null)return"";e=r;var t=e;return`
apiConfig.loginPage = '`+Yn(Yn(t,"\\","\\\\"),"'","\\'")+`';
`}function E5(n){var r=n.h1i_1,e;r:{var t;if(E(r,W)?t=r.i1():t=!1,t){e=!1;break r}for(var i=r.x();i.y();){var a=i.z();if(a.c1j_1!=null){e=!0;break r}}e=!1}var s=e,o=n.h1i_1,u=e7,c=new Ty(u),f=zi(o,c),v=V(f,"",l,l,l,l,t7),h=n.f1i_1!=null?"redirect(307, loginPath(url))":"error(401, 'Unauthorized')",d="import { error"+(n.f1i_1!=null?", redirect":"")+` } from '@sveltejs/kit';
`+("import { "+(n.f1i_1!=null?"loginPath, ":"")+`matchGuard, type PageGuard } from './client.js';
`)+("import { currentUser } from './"+Qi("current-user.svelte.ts",".ts")+`.js';
`)+("import type { "+(s?"CurrentUser, Permission":"CurrentUser")+` } from './types.js';

`)+("export const pageGuards: readonly PageGuard<"+(s?"Permission":"never")+`>[] = [
`+v+`];

`)+`export async function signedInUser(url: URL): Promise<CurrentUser> {
    const user = await currentUser.load();
`+("    if (!user) "+h+`;
`),_;return s?_=`    const guard = matchGuard(pageGuards, url.pathname);
    if (guard?.permission && !currentUser.can(guard.permission)) error(403, 'Forbidden');
`:_="",d+_+`    return user;
}

export async function guardPages(event: { url: URL }): Promise<void> {
    if (typeof document === 'undefined' || !matchGuard(pageGuards, event.url.pathname)) return;
    await signedInUser(event.url);
}
`}function z5(n,r){var e=n.e1i_1,t;if(e==null)return"";t=e;var i=t;return uw(n,"CurrentUser",i.d1j_1,i.e1j_1,r)}function I5(n,r){var e=n.i1i_1,t;if(e==null)return"";t=e;var i=t;return uw(n,"UserPreferences",i.g1j_1,i.h1j_1,r)}function uw(n,r,e,t,i){var a=i.p2(),s;r:{for(var o=a.x();o.y();){var u=o.z();if(Rn(u)===e){s=u;break r}}s=null}var c=s;if(c!=null)return`
export type `+r+" = "+Rn(c)+`;
`;var f=jr(Ie().m15(t)),v=Tn.e1();return`
`+nv(n,r,f,v,i)}function C5(n,r){for(var e=ar(jr(Ie().m15(r.h1j_1)),"properties"),t=(e??Tr()).p2(),i=r.k1j_1,a=vr.q4(),s=i.r2().x();s.y();){var o=s.z(),u=o.k2();t.l1(u)&&a.s2(o.k2(),o.l2())}var c=a,f=c.r2(),v=V(f,", ",l,l,l,l,i7),h=Yy().k15(Pf.t17(),Ie().m15(r.j1j_1)),d="const defaults: Required<UserPreferences> = "+h+`;

`,_=ve(r.i1j_1),m;return C(v)===0?m="":m=" "+v+" ",`import { preferenceStore, type PreferenceState } from './client.js';
import type { UserPreferences } from './types.js';

`+d+`const state = $state<PreferenceState<Required<UserPreferences>>>({ value: defaults, ready: false });

export const preferences = preferenceStore<Required<UserPreferences>>(`+(_+", state, defaults, {"+m+`});
`)}function A5(n,r){var e=!n.g1i_1.i1(),t=e?"CurrentUser, Permission":"CurrentUser",i=`import { userStore, type UserState } from './client.js';
`+("import type { "+t+` } from './types.js';

`)+("const state = $state<UserState<"+t+">>(")+`{ user: null, ready: false, sessionEnds: null, sessionEnding: false, permissions: [] });

`+("export const currentUser = userStore<"+t+">('"+r.f1j_1+`', state);
`),a;return e?a=`
export const can = (permission: Permission): boolean => currentUser.can(permission);
`:a="",i+a}function T5(n,r){var e,t=n.z1h_1,i;r:{var a;if(E(t,W)?a=t.i1():a=!1,a){i=!0;break r}for(var s=t.x();s.y();){var o=s.z();if(r===o||ze(r,o+"/")){i=!1;break r}}i=!0}if(i){var u;if(n.r1i_1.i1())u=!0;else{var c=n.r1i_1,f;r:{var v;if(E(c,W)?v=c.i1():v=!1,v){f=!1;break r}for(var h=c.x();h.y();){var d=h.z();if(d==="/"||r===d||ze(r,d+"/")){f=!0;break r}}f=!1}u=f}e=u}else e=!1;return e}function q5(n,r){if(r.i1()&&n.q1i_1.i1()&&n.s1i_1.i1()&&!n.t1i_1&&!n.u1i_1)return`export {};
`;for(var e=Tn.e1(),t=T.g1(r.c1()),i=r.r2().x();i.y();){var a=i.z(),s=a.k2(),o=a.l2(),u=j(s,nv(n,Rn(s),jr(o),e,r));t.n(u)}for(var c=t,f=n.s1i_1.q2(),v=T.m(),h=f.x();h.y();){var d=h.z();d.n1j_1&&v.n(d)}for(var _=T.g1(Zr(v,10)),m=v.x();m.y();){var w=m.z(),x=j(w.l1j_1,hw(n,w.l1j_1,w.m1j_1));_.n(x)}var k=_,S=Ee(c,k),z=a7,I=new qy(z),A=zi(S,I),q=V(A,`
`,l,l,l,l,s7),N;e.l1("LucideIcon")?N=`import type { LucideIconName as LucideIcon } from '../ktor-svelte/icons.js';

export type { LucideIcon };

`:N="";var $=N,O=r.q2(),L;r:{var H;if(E(O,W)?H=O.i1():H=!1,H){L=!1;break r}for(var B=O.x();B.y();){var F=B.z();if(tv(n,jr(F))){L=!0;break r}}L=!1}var R=L,X=`declare const brand: unique symbol;
`,J;R||n.u1i_1?J=X:J=null;var er=J,Y=Le("dates.ts"),G;n.t1i_1?G=Y:G=null;var sr=G,ur=Le("quantities.ts"),Q;n.u1i_1?Q=ur:Q=null;var Er=Q,zr;C(q)===0?zr=null:zr=q;var mr=zr,Ir=V(st([er,sr,Er,mr]),`
`),br;return C(Ir)===0?br=`export {};
`:br=Ir,$+br}function nv(n,r,e,t,i){var a=gl(n,mw(n,e),""),s=cu(n,e),o;if(s!=null){var u=e.c18("enum"),c=u==null?null:us(u),f;if(c==null)f=null;else{var v;r:{var h;if(E(c,W)?h=c.i1():h=!1,h){v=!0;break r}for(var d=c.x();d.y();){var _=d.z();if(_ instanceof ce){v=!1;break r}}v=!0}f=v}o=f===!0}else o=!1;if(o)return a+hw(n,r,s);if(tv(n,e)){var m=$n(n,e,t);return a+("export type "+r+" = "+m+" & { readonly [brand]: '"+r+`' };

`)+("export const "+r+" = (value: "+m+"): "+r+" => value as "+r+`;
`)}if(iv(n,e))return a+("export interface "+r+" "+dw(n,e,t,"")+`

`)+("export const "+r+` = {
`)+("    empty: (): "+r+" => ("+wc(n,e,i,"    ",Ot())+`),
`)+j5(n,e)+N5(n,r,e,i)+`};
`;var w=a+("export type "+r+" = "+$n(n,e,t)+`;
`),x=O5(n,r,e,i);return w+(x??"")}function O5(n,r,e,t){var i=ar(e,"discriminator"),a=i==null?null:Fr(i,"propertyName"),s;if(a==null)return null;s=a;var o=s,u=hn(e,"oneOf"),c=u??hn(e,"anyOf"),f;if(c==null)return null;f=c;var v=f,h=ar(e,"discriminator"),d=h==null?null:ar(h,"mapping"),_=d==null?null:d.p2(),m=_==null?null:Ei(_),w=m??dr(),x;if(w.i1()){for(var k=T.g1(Zr(v,10)),S=v.x();S.y();){var z=S.z(),I=_l(n,jr(z)),A;if(I==null)A=null;else{var q=t.o2(I);A=q==null?null:jr(q)}var N=A,$=N??jr(z),O=ar($,"properties"),L=O==null?null:ar(O,o),H=L==null?null:hn(L,"enum"),B=H==null?null:Lc(H),F=B instanceof fr?B:null,R=F==null?null:Bn(F),X;if(R==null)return null;X=R;var J=X;k.n(J)}x=k}else x=w;var er=x;if(er.i1())return null;var Y=fe(n,re(o)),G=V(er,l,l,l,l,l,o7(n));return`
export const `+r+` = {
`+("    types: ["+G+`] as const,
`)+("    match: <R>(value: "+r+", cases: { [K in "+r+"["+Y+"]]: (value: Extract<"+r+", { "+$e(o)+`: K }>) => R }): R =>
`)+("        (cases[value["+Y+"]] as (value: "+r+`) => R)(value),
`)+`};
`}function j5(n,r){for(var e=hu(r,"required"),t=ar(r,"properties"),i=t??Tr(),a=T.m(),s=i.r2().x();s.y();){var o=s.z(),u=o.k2(),c=o.l2(),f=U5(n,jr(c),e.l1(u)),v;if(f.i1())v=null;else{var h=$e(u);v="        "+h+": { "+V(f,l,l,l,l,l,l7)+" },"}var d=v;d==null||a.n(d)}var _=a;return _.i1()?"":`    bounds: {
`+V(_,`
`)+`
    },
`}function U5(n,r,e){var t=Ni(n,r).l1("integer"),i=j("required","true"),a;cw(n,r,e)?a=i:a=null;var s=a,o=be(n,r,"minLength"),u;o==null?u=null:u=j("minlength",At(o));var c=u,f=be(n,r,"maxLength"),v;f==null?v=null:v=j("maxlength",At(f));var h=v,d=Kh(n,r,t,"minimum","exclusiveMinimum",1),_;d==null?_=null:_=j("min",d);var m=_,w=Kh(n,r,t,"maximum","exclusiveMaximum",-1),x;w==null?x=null:x=j("max",w);var k=x,S=Fr(r,"pattern"),z;return S==null?z=null:z=j("pattern",fe(n,re(S))),st([s,c,h,m,k,z])}function cw(n,r,e){if(av(n,r)||r.c18("enum")!=null)return!1;var t;if(Ni(n,r).l1("string")){var i=be(n,r,"minLength");t=(i??0)>=1}else t=e&&fw(n,r);return t}function fw(n,r){var e=Ni(n,r),t;r:{var i;if(E(e,W)?i=e.i1():i=!1,i){t=!1;break r}for(var a=e.x();a.y();){var s=a.z();if(s==="integer"||s==="number"){t=!0;break r}}t=!1}return t}function N5(n,r,e,t){if(!ev(n,e,t,Ot()))return"";for(var i=hu(e,"required"),a=ar(e,"properties"),s=a??Tr(),o=T.m(),u=s.r2().x();u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=jr(v),d="value"+(Qf().ue(f)?"."+f:"["+fe(n,re(f))+"]"),_=Ee(D5(n,f,d,h,i.l1(f)),mc(n,h,d,yc(n,f),"        ",0,t));Ia(o,_)}var m=o,w="    validate: (value: "+r+`): Record<string, string[]> => {
        const errors: Record<string, string[]> = {};
`;return w+V(m,"",l,l,l,l,u7)+`        return errors;
    },
`}function ev(n,r,e,t){var i;if(iv(n,r)){var a=ar(r,"properties"),s=(a??Tr()).q2(),o;r:{var u;if(E(s,W)?u=s.i1():u=!1,u){o=!1;break r}for(var c=s.x();c.y();){var f=c.z(),v=jr(f),h,d,_=p5(),m;n:{var w;if(E(_,W)?w=_.i1():w=!1,w){m=!1;break n}for(var x=_.x();x.y();){var k=x.z();if(be(n,v,k)!=null||k==="pattern"&&Fr(v,k)!=null){m=!0;break n}}m=!1}if(m?d=!0:d=Iw().u1j(Fr(v,"format"))!=null,d)h=!0;else{var S=_l(n,v),z;if(S==null)z=null;else{var I;if(t.l1(S))I=!1;else{var A=e.o2(S),q=A instanceof nr?A:null,N;q==null?N=null:N=ev(n,q,e,yo(t,S)),I=N===!0}z=I}h=z===!0}if(h){o=!0;break r}}o=!1}i=o}else i=!1;return i}function _l(n,r){var e=Fr(r,"$ref");if(e!=null)return Aa(e,47);var t=vw(n,r);if(t!=null)return _l(n,t);if(Ni(n,r).l1("array")){var i=ar(r,"items"),a;return i==null?a=null:a=_l(n,i),a}return null}function vw(n,r){var e=hn(r,"oneOf"),t=e??hn(r,"anyOf"),i;if(t==null)i=null;else{for(var a=T.m(),s=t.x();s.y();){var o=s.z(),u=o instanceof nr?o:null;u==null||a.n(u)}i=a}var c=i,f;if(c==null)f=null;else{for(var v=T.m(),h=c.x();h.y();){var d=h.z();P(Ni(n,d),On("null"))||v.n(d)}f=v}var _=f;return _==null?null:Lc(_)}function D5(n,r,e,t,i){var a=fe(n,re(r)),s=be(n,t,"minLength"),o=s==null?null:ko(s),u=be(n,t,"maxLength"),c=u==null?null:ko(u),f=t.c18("pattern"),v=f instanceof fr?f:null,h;if(v==null)h=null;else{var d;v.v17()?d=v:d=null,h=d}var _=h,m=_==null?null:_.w17(),w=Iw().u1j(Fr(t,"format")),x=be(n,t,"minimum"),k;x==null?k=null:k=j(x,!1);var S=k,z;if(S==null){var I=be(n,t,"exclusiveMinimum"),A;I==null?A=null:A=j(I,!0),z=A}else z=S;var q=z,N=be(n,t,"maximum"),$;N==null?$=null:$=j(N,!1);var O=$,L;if(O==null){var H=be(n,t,"exclusiveMaximum"),B;H==null?B=null:B=j(H,!0),L=B}else L=O;var F=L,R=T.m();if(cw(n,t,i)&&fw(n,t)){var X="        if (typeof "+e+" !== 'number' || Number.isNaN("+e+")) "+Jt(a,n,"Required.");R.n(X)}if(o!=null||c!=null||m!=null||w!=null){var J="        if (typeof "+e+" === 'string') {";if(R.n(J),o!=null||c!=null){var er="            const length = [..."+e+"].length;";R.n(er)}if(o!=null){var Y="            if (length < "+o+") "+Jt(a,n,Xi.v1j(o));R.n(Y)}if(c!=null){var G="            if (length > "+c+") "+Jt(a,n,Xi.w1j(c));R.n(G)}if(m!=null){var sr=n.v1i_1,ur=Zh();sr.n(ur);var Q="            if (!matches("+fe(n,re(m))+", "+e+")) "+Jt(a,n,Xi.x1j(m));R.n(Q)}if(w!=null){var Er=n.v1i_1,zr=Zh();Er.n(zr);var mr=V(w.z1j_1," && ",l,l,l,l,c7(n,e)),Ir="            if (!("+mr+")) "+Jt(a,n,w.a1k_1);R.n(Ir)}var br="        }";R.n(br)}if(q!=null||F!=null){var Cr="        if (typeof "+e+" === 'number') {";if(R.n(Cr),q!=null){var Pr=q.hh(),pr=q.ih(),Yr=pr?"<=":"<",an="            if ("+e+" "+Yr+" "+At(Pr)+") "+Jt(a,n,Xi.b1k(Pr,pr));R.n(an)}if(F!=null){var Gr=F.hh(),_r=F.ih(),Rr=_r?">=":">",$r="            if ("+e+" "+Rr+" "+At(Gr)+") "+Jt(a,n,Xi.c1k(Gr,_r));R.n($r)}var nn="        }";R.n(nn)}if(!R.i1()){var Br=n.v1i_1,sn=zw();Br.n(sn)}return R}function mc(n,r,e,t,i,a,s){var o=Fr(r,"$ref");if(o!=null){var u=Aa(o,47),c=s.o2(u),f=c instanceof nr?c:null,v;if(f==null)return dr();v=f;var h=v;if(!ev(n,h,s,Ot()))return dr();var d=n.v1i_1,_=kt([zw(),H7()]);return Ia(d,_),On(i+"if ("+e+" != null) addNested(errors, `"+t+".`, "+Rn(u)+".validate("+e+"));")}var m=vw(n,r);if(m!=null)return mc(n,m,e,t,i,a,s);if(!Ni(n,r).l1("array"))return dr();var w=ar(r,"items"),x;if(w==null)return dr();x=w;var k=x,S=a===0?"":""+(a+1|0),z="item"+S,I="index"+S,A=mc(n,k,z,t+"[${"+I+"}]",i+"        ",a+1|0,s);return A.i1()?dr():Ee(Ee(kt([i+"if (Array.isArray("+e+")) {",i+"    "+e+".forEach(("+z+", "+I+") => {"]),A),kt([i+"    });",i+"}"]))}function yc(n,r){return Yn(Yn(Yn(r,"\\","\\\\"),"`","\\`"),"$","\\$")}function be(n,r,e){var t=r.c18(e),i=t instanceof fr?t:null,a;if(i==null)a=null;else{var s;i.v17()?s=null:s=i,a=s}var o=a,u=o==null?null:Bn(o);return u==null?null:rf(u)}function Ni(n,r){var e=r.c18("type"),t;if(e instanceof fn){for(var i=T.g1(Zr(e,10)),a=e.x();a.y();){var s=a.z(),o=An(s).w17();i.n(o)}t=i}else e instanceof fr?t=On(e.w17()):t=dr();return t}function hw(n,r,e){var t=V(e,"",l,l,l,l,f7(n));return"export const "+r+` = {
`+t+`} as const;

export type `+r+" = (typeof "+r+")[keyof typeof "+r+`];
`}function L5(n,r,e){for(var t=vr.q4(),i=vu(e).r2().x();i.y();){var a=i.z(),s=a.k2(),o=a.l2(),u=cu(n,jr(o));if(u!=null){var c=it(u),f=t.o2(c);if(f==null){var v=new _c(Rn(s),u,!1);t.s2(c,v)}}}for(var h=vr.q4(),d=vr.q4(),_=e.r2().x();_.y();){var m=_.z(),w=m.k2(),x=m.l2();na(n,h,d,x,Rn(w),Rn(w),!0)}var k=ar(r,"paths");k==null||na(n,h,d,k,"","",!1);for(var S=h.p2(),z=T.m(),I=S.x();I.y();){var A=I.z(),q;(E(t,mn)?t:g()).m2(A)?q=!1:q=!P(A,n.q1i_1),q&&z.n(A)}for(var N=v7(d),$=new Oy(N),O=zi(z,$),L=vr.ha(vn(Zr(O,10),16)),H=O.x();H.y();){var B=H.z(),F=Se(h,B),R=h7,X=Eb(F,k2([R,d7]));L.s2(B,X)}for(var J=L,er=J.q2(),Y=new Uy(er),G=Ok(Y),sr=e.p2(),ur=T.g1(Zr(sr,10)),Q=sr.x();Q.y();){var Er=Q.z(),zr=Rn(Er);ur.n(zr)}for(var mr=Pc(mi(mi(ur,"LucideIcon"),"PublicConfig")),Ir=vr.ia(t),br=O.x();br.y();){var Cr=br.z(),Pr=Se(J,Cr),pr=Rn(Pr.e1k_1),Yr;if(Se(G,pr)>1||mr.l1(pr)){var an=Pr.d1k_1,Gr;C(an)===0?Gr=pr:Gr=an+pr,Yr=Gr}else Yr=pr;var _r=Yr,Rr;if(!mr.l1(_r))Rr=_r;else{var $r=sf(2,p7),nn=Cs($r,_7(_r)),Br;r:{for(var sn=nn.x();sn.y();){var on=sn.z();if(!mr.l1(on)){Br=on;break r}}throw Or.r("Sequence contains no element matching the predicate.")}Rr=Br}var pn=Rr;mr.n(pn);var yn=new _c(pn,Se(d,Cr),!0);Ir.s2(Cr,yn)}return Ir}function cu(n,r){var e=hn(r,"enum"),t;if(e==null)return null;t=e;for(var i=t,a=T.m(),s=i.x();s.y();){var o=s.z();o instanceof ce||a.n(o)}var u=a,c;r:{var f;if(E(u,W)?f=u.i1():f=!1,f){c=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d;if(h instanceof fr?d=!h.v17():d=!0,d){c=!0;break r}}c=!1}if(c)return null;for(var _=T.g1(Zr(u,10)),m=u.x();m.y();){var w=m.z(),x=An(w).w17();_.n(x)}var k=fa(_),S;return k.c1()>1?S=k:S=null,S}function tv(n,r){var e,t,i=c5(),a=r.c18("type"),s=a instanceof fr?a:null;if(zb(i,s==null?null:Bn(s))?t=r.c18("title")!=null:t=!1,t){var o=r.p2(),u;r:{var c;if(E(o,W)?c=o.i1():c=!1,c){u=!0;break r}for(var f=o.x();f.y();){var v=f.z();if(!(v==="type"||v==="title")){u=!1;break r}}u=!0}e=u}else e=!1;return e}function iv(n,r){return ar(r,"properties")!=null&&r.c18("allOf")==null}function wc(n,r,e,t,i){var a=ar(r,"properties"),s=a??Tr();if(s.i1())return"{}";for(var o=T.g1(s.c1()),u=s.r2().x();u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=t+"    "+$e(f)+": "+si(n,jr(v),e,t+"    ",i)+",";o.n(h)}var d=o;return V(mi(Ee(On("{"),d),t+"}"),`
`)}function si(n,r,e,t,i){if(av(n,r))return"null";var a=Fr(r,"$ref");if(a!=null){var s=Aa(a,47),o=e.o2(s),u=o instanceof nr?o:null,c;if(u==null)return"null";c=u;var f=c;return iv(n,f)?Rn(s)+".empty()":tv(n,f)?Rn(s)+"("+si(n,f,e,t,yo(i,s))+")":i.l1(s)?"null":si(n,f,e,t,yo(i,s))}var v=r.c18("enum");if(v!=null){var h=gu(us(v)),d;h==null?d=null:d=fe(n,h);var _=d;return _??"null"}var m=r.c18("const");if(m!=null)return fe(n,m);var w=hn(r,"oneOf"),x=w??hn(r,"anyOf");if(x!=null){var k=gu(x),S;k==null?S=null:S=si(n,jr(k),e,t,i);var z=S;return z??"null"}var I=hn(r,"allOf");if(I!=null)return I.c1()===1?si(n,jr(Pp(I)),e,t,i):V(I,", ","{ "," }",l,l,g7(n,e,t,i));var A=r.c18("type"),q;if(A instanceof fn){var N=gu(A),$=N==null?null:An(N);q=$==null?null:$.w17()}else A instanceof fr?q=Bn(A):q=null;var O=q,L;switch(O){case"string":var H=lv(r),B;H==null?B=null:B="'' as "+H;var F=B,R;if(F==null){var X=kw(r),J;X==null?J=null:J=Se(u5(),X)+" as "+X,R=J}else R=F;var er=R;L=er??"''";break;case"integer":case"number":L="0";break;case"boolean":L="false";break;case"array":var Y=hn(r,"prefixItems"),G;Y==null?G=null:G=V(Y,", ","[","]",l,l,m7(n,e,t,i));var sr=G;L=sr??"[]";break;case"object":L=wc(n,r,e,t,i);break;case null:L=r.c18("properties")!=null?wc(n,r,e,t,i):"null";break;default:L="null";break}return L}function av(n,r){var e=r.c18("type"),t=hn(r,"oneOf"),i=t??dr(),a=hn(r,"anyOf"),s=a??dr(),o=Ee(i,s),u,c,f,v,h;if(e instanceof fn){var d;r:{var _;if(E(e,W)?_=e.i1():_=!1,_){d=!1;break r}for(var m=e.x();m.y();){var w=m.z();if(An(w).w17()==="null"){d=!0;break r}}d=!1}h=d}else h=!1;if(h)v=!0;else{var x;e instanceof fr?x=e.w17()==="null":x=!1,v=x}if(v)f=!0;else{var k=r.c18("nullable"),S=k instanceof fr?k:null;f=(S==null?null:Bn(S))==="true"}if(f)c=!0;else{var z=hn(r,"enum"),I=z??dr(),A;r:{var q;if(E(I,W)?q=I.i1():q=!1,q){A=!1;break r}for(var N=I.x();N.y();){var $=N.z();if($ instanceof ce){A=!0;break r}}A=!1}c=A}if(c)u=!0;else{var O;r:{var L;if(E(o,W)?L=o.i1():L=!1,L){O=!1;break r}for(var H=o.x();H.y();){var B=H.z(),F=B instanceof nr?B:null,R;if(F==null?R=null:R=av(n,F),R===!0){O=!0;break r}}O=!1}u=O}return u}function dw(n,r,e,t){for(var i=hu(r,"required"),a=ar(r,"properties"),s=a??Tr(),o=T.g1(s.c1()),u=s.r2().x();u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=i.l1(f)?"":"?",d=bw(jr(v))?"readonly ":"",_=gl(n,mw(n,jr(v)),t+"    ")+(t+"    "+d+$e(f)+h+": "+$n(n,jr(v),e,t+"    ")+";");o.n(_)}var m=o;return V(mi(Ee(On("{"),m),t+"}"),`
`)}function $n(n,r,e,t){t=t===l?"":t;var i=Fr(r,"$ref");if(i!=null){var a=Rn(Aa(i,47));return e.n(a),a}var s=r.c18("enum");if(s!=null){for(var o=us(s),u=T.m(),c=o.x();c.y();){var f=c.z(),v=f instanceof fr?f:null,h=v==null?null:Bn(v);h==null||u.n(h)}var d=it(u),_;if(n.q1i_1.i1()?_=!1:_=P(d,n.q1i_1),_){var m="LucideIcon";return e.n(m),"LucideIcon"}var w=cu(n,r);if(w!=null){var x=n.s1i_1.o2(it(w));if(x!=null){var k=x.l1j_1;e.n(k);var S,z=us(s),I;r:{var A;if(E(z,W)?A=z.i1():A=!1,A){I=!1;break r}for(var q=z.x();q.y();){var N=q.z();if(N instanceof ce){I=!0;break r}}I=!1}return I?S=x.l1j_1+" | null":S=x.l1j_1,S}}var $=us(s),O=V($," | ",l,l,l,l,y7(n)),L;return C(O)===0?L="never":L=O,L}var H=r.c18("const");if(H!=null)return fe(n,H);var B=hn(r,"oneOf");if(B!=null)return Gh(n,B,e,t);var F=hn(r,"anyOf");if(F!=null)return Gh(n,F,e,t);var R=hn(r,"allOf");if(R!=null)return V(R," & ",l,l,l,l,w7(n,e,t));var X=r.c18("type"),J;if(X==null)J=r.c18("properties")!=null?pw(n,r,e,t):"unknown";else if(X instanceof fn){for(var er=T.g1(Zr(X,10)),Y=X.x();Y.y();){var G=Y.z(),sr=Hh(n,An(G).w17(),r,e,t);er.n(sr)}J=V(fa(er)," | ")}else J=Hh(n,An(X).w17(),r,e,t);return J}function Hh(n,r,e,t,i){var a;switch(r){case"string":var s=lv(e),o=s??kw(e),u;o==null?u=null:(t.n(o),u=o);var c=u;a=c??"string";break;case"integer":case"number":a="number";break;case"boolean":a="boolean";break;case"null":a="null";break;case"array":a=P5(n,e,t,i);break;case"object":a=pw(n,e,t,i);break;default:a="unknown";break}return a}function P5(n,r,e,t){var i=hn(r,"prefixItems");if(i!=null)return V(i,", ","[","]",l,l,b7(n,e,t));var a=r.c18("items"),s=a==null?null:jr(a),o;if(s==null)return"unknown[]";o=s;var u=o,c=$n(n,u,e,t);return ws(c," | ")||ws(c," & ")?"("+c+")[]":c+"[]"}function pw(n,r,e,t){var i=ar(r,"properties");if(!(i??Tr()).i1())return dw(n,r,e,t);var a=r.c18("additionalProperties"),s=a instanceof nr?a:null;return s!=null?"Record<string, "+$n(n,s,e,t)+">":"Record<string, unknown>"}function Gh(n,r,e,t){for(var i=T.g1(Zr(r,10)),a=r.x();a.y();){var s=a.z(),o=$n(n,jr(s),e,t);i.n(o)}return V(fa(i)," | ")}function fe(n,r){var e;if(r instanceof ce)e="null";else{var t;r instanceof fr?t=r.v17():t=!1,t?e=ve(r.w17()):r instanceof fr?e=r.w17():e="unknown"}return e}function M5(n,r,e){for(var t=Tn.e1(),i=vr.q4(),a=T.m(),s=vr.q4(),o=r.r2().x();o.y();)for(var u=o.z(),c=u.k2(),f=u.l2(),v=jr(f),h=Jy().x();h.y();){var d=h.z(),_=ar(v,d);if(_!=null){var m=gw(n,c),w=i.o2(m),x;if(w==null){var k=T.m();i.s2(m,k),x=k}else x=w;var S=x,z=G5(n,c,d,v,_);S.n(z)}}var I=Pc(rv());I.h1(i.p2());for(var A=I,q=vu(i),N=T.g1(q.c1()),$=q.r2().x();$.y();){var O=$.z(),L=O.k2(),H=O.l2(),B=Tn.e1(),F=rn.f(),R=V(H,`
`,l,l,l,l,k7(t,n,B,L,a,s,A,F)),X=F.toString()+`
export const `+L+` = {
`+R+`
};
`;N.n(X)}for(var J=N,er=fi(t),Y=T.m(),G=er.x();G.y();){for(var sr=G.z(),ur=T.g1(Zr(e,10)),Q=e.x();Q.y();){var Er=Q.z(),zr=Rn(Er);ur.n(zr)}ur.l1(sr)&&Y.n(sr)}var mr=Y,Ir,br=c2(i.q2()),Cr;r:{var Pr;if(E(br,W)?Pr=br.i1():Pr=!1,Pr){Cr=!1;break r}for(var pr=br.x();pr.y();){var Yr=pr.z();if(Yr.m1k_1){Cr=!0;break r}}Cr=!1}Cr?Ir="ApiError, request, stream":Ir="ApiError, request";var an=Ir,Gr=n.d1i_1.i1()?an:an+", codeMessages, errorCode",_r=rn.f();_r.ca("import { "+Gr+`, type RequestOptions } from './client.js';
`);var Rr=n.a1i_1!=null?mi(mr,"PublicConfig"):mr,$r=n.d1i_1.i1()?Rr:fi(mi(Rr,"ErrorCode"));$r.i1()||_r.ca("import type { "+V($r)+` } from './types.js';
`),_r.ca(`
`);for(var nn=J.x();nn.y();){var Br=nn.z();_r.ca(Br).ca(`
`)}if(_r.ca($5(n,a)),n.d1i_1.i1()||_r.ca(f5()),!s.i1()){_r.ca(`export const uploadRules = {
`);for(var sn=s.r2(),on=x7,pn=new jy(on),yn=zi(sn,pn).x();yn.y();){var _e=yn.z(),Ln=_e.k2(),Gn=_e.l2();_r.ca("    '"+Ln+"': "+Gn+`,
`)}_r.ca(`} as const;

`)}return n.a1i_1!=null&&_r.ca(Le("public-config.ts")),_r.ca("export const api = { "+V(fi(i.p2()))+` };
`),_r.ca(Le("api-with.ts")),_r.toString()}function R5(n,r){var e=ar(r,"properties"),t;if(e==null)t=null;else{var i;e.i1()?i=null:i=e,t=i}var a=t,s;if(a==null)return null;s=a;var o=s,u=it(hu(r,"required")),c=o.r2(),f=V(c,"; ",l,l,l,l,S7(u));return"{ "+f+" }"}function B5(n,r){var e=r.c18("maxBytes"),t=e==null?null:An(e),i=t==null?null:PI(t),a;i==null?a=null:a="maxBytes: "+i.toString();var s=a,o=hn(r,"types"),u;if(o==null)u=null;else{for(var c=T.g1(Zr(o,10)),f=o.x();f.y();){var v=f.z(),h=ve(An(v).w17());c.n(h)}u=c}var d=u,_;if(d==null)_=null;else{var m;d.i1()?m=null:m=d,_=m}var w=_,x;w==null?x=null:x="types: ["+V(w)+"]";var k=x,S=r.c18("maxFiles"),z=S==null?null:An(S),I=z==null?null:MI(z),A;I==null?A=null:A="maxFiles: "+I;var q=st([s,k,A]);return"{ "+V(q)+" }"}function F5(n){return _w(n,"ErrorCode",n.d1i_1)}function _w(n,r,e){if(e.i1())return"";var t=V(e," | ",l,l,l,l,E7),i=V(e,"",l,l,l,l,z7);return`
export type `+r+" = "+t+`;

export const `+r+` = {
`+i+`} as const;
`}function $5(n,r){var e=V(r,"",l,l,l,l,I7),t=V(r,"",l,l,l,l,C7);return`export interface ApiErrors {
`+e+`}

`+(`const errorStatuses: Record<string, number[]> = {
`+t+`};

`)+`export function isApiError<K extends keyof ApiErrors>(error: unknown, operation: K): error is ApiError<ApiErrors[K]> {
    return error instanceof ApiError && error.operation === operation && (errorStatuses[operation] ?? []).includes(error.status);
}

`}function J5(n,r,e){var t=ov(r),i=sf(1,A7),a=Cs(i,T7(t)),s;r:{for(var o=a.x();o.y();){var u=o.z();if(!e.l1(u)){s=u;break r}}throw Or.r("Sequence contains no element matching the predicate.")}var c=s;return e.n(c),c}function H5(n,r,e,t){var i=g2([r,r+V(e,"",l,l,l,l,q7)]),a;r:{for(var s=i.x();s.y();){var o=s.z();if(!t.l1(o)){a=o;break r}}a=null}var u=a,c;if(u==null){var f=sf(2,O7),v=Cs(f,j7(r)),h;r:{for(var d=v.x();d.y();){var _=d.z();if(!t.l1(_)){h=_;break r}}throw Or.r("Sequence contains no element matching the predicate.")}c=h}else c=u;var m=c;return t.n(m),m}function G5(n,r,e,t,i){for(var a=Tn.e1(),s=hn(t,"parameters"),o=s??dr(),u=hn(i,"parameters"),c=u??dr(),f=Ee(o,c),v=T.g1(Zr(f,10)),h=f.x();h.y();){var d=h.z(),_=jr(d);v.n(_)}for(var m=v,w=Ky().xe(r),x=Bp(Cs(w,U7)),k=T.m(),S=x.x();S.y();){var z=S.z(),I;r:{for(var A=m.x();A.y();){var q=A.z();if(Fr(q,"name")===z&&Fr(q,"in")==="path"){I=q;break r}}I=null}var N=I,$=N==null?null:ar(N,"schema"),O;$==null?O=null:O=$n(n,$,a);var L=O,H;if(L==null)H=null;else{var B;L==="unknown"||L==="string"?B=null:B=L,H=B}var F=H,R=F??"string | number",X=yw(z)+": "+R;k.n(X)}var J=ar(i,"requestBody"),er=J==null?null:ar(J,"content"),Y=er==null?null:er.r2(),G;if(Y==null)G=null;else{var sr;r:{for(var ur=Y.x();ur.y();){var Q=ur.z();if(ze(Q.k2(),"multipart/")){sr=Q;break r}}sr=null}G=sr}var Er=G,zr=Er==null?null:Er.l2(),mr;zr==null?mr=null:mr=zr instanceof nr?zr:null;var Ir=mr,br=Ir==null?null:ar(Ir,"schema"),Cr;br==null?Cr=null:Cr=R5(n,br);var Pr=Cr,pr;if(Er!=null)pr=Pr??"FormData";else{var Yr;er==null?Yr=null:Yr=bc(n,er);var an=Yr,Gr;an==null?Gr=null:Gr=$n(n,an,a),pr=Gr}var _r=pr,Rr;if(Er==null){var $r;er==null?$r=null:$r=bc(n,er);var nn=$r,Br;nn==null?Br=null:Br=K5(n,nn);var sn=Br;Rr=sn??dr()}else Rr=dr();var on=Rr,pn;on.i1()?pn=_r:pn="Omit<"+_r+", "+V(on," | ",l,l,l,l,N7)+">";var yn=pn;if(J!=null){var _e="body: "+(yn??"unknown");k.n(_e)}for(var Ln=T.m(),Gn=m.x();Gn.y();){var ge=Gn.z();Fr(ge,"in")==="query"&&Ln.n(ge)}var Pn=Ln;if(!Pn.i1()){var me=V(Pn,"; ",l,l,l,l,D7(n,a)),Te;r:{var Ue;if(E(Pn,W)?Ue=Pn.i1():Ue=!1,Ue){Te=!1;break r}for(var Ne=Pn.x();Ne.y();){var ye=Ne.z(),zn=ye.c18("required"),xn=zn==null?null:An(zn);if((xn==null?null:Bn(xn))==="true"){Te=!0;break r}}Te=!1}var In=Te,Ra="query"+(In?"":"?")+": { "+me+" }";k.n(Ra)}for(var Nt=T.m(),ft=m.x();ft.y();){var vt=ft.z(),Dt;if(Fr(vt,"in")==="header"){var Di=h5(),ht=Fr(vt,"name"),Li=(ht??"").toLowerCase();Dt=!Di.l1(Li)}else Dt=!1;Dt&&Nt.n(vt)}var De=Nt;if(!De.i1()){var Ba=V(De,"; ",l,l,l,l,L7(n,a)),dt;r:{var Lt;if(E(De,W)?Lt=De.i1():Lt=!1,Lt){dt=!1;break r}for(var Pi=De.x();Pi.y();){var Fa=Pi.z(),Mi=Fa.c18("required"),Pt=Mi==null?null:An(Mi);if((Pt==null?null:Bn(Pt))==="true"){dt=!0;break r}}dt=!1}var $a=dt,Ja="headers"+($a?"":"?")+": { "+Ba+" }";k.n(Ja)}var Ri="options?: RequestOptions";k.n(Ri);var Bi=x.i1()?ve(r):W5(n,r),Mt=ar(i,"x-ktor-svelte-upload"),Rt;Mt==null?Rt=null:Rt=B5(n,Mt);var Bt=Rt,Fi=i.c18("x-ktor-svelte-timeout"),$i=Fi==null?null:An(Fi),pt=$i==null?null:Bn($i),Vs=pt==null?null:rf(pt),Ft=Vs==null?null:jn(Vs),Ha;if(Ft==null)Ha=null;else{var $t;tr(Ft,new y(0,0))>0?$t=Ft:$t=null,Ha=$t}var Xs=Ha,we=T.m();Xs!=null&&we.n("timeout: "+Xs.toString()),we.n("...options"),Pn.i1()||we.n("query"),De.i1()||we.n("typedHeaders: headers"),J!=null&&we.n("body"),on.i1()||we.n("omit: ["+V(on,l,l,l,l,l,P7)+"]"),Bt!=null&&we.n("upload: "+Bt),Pr!=null&&we.n("multipart: true");var Ga=we.j6(),Qs=Z5(n,i,a),Ji=V5(n,i),ro=Y5(n,i,a),Ka=e.toUpperCase(),no=Fr(i,"operationId"),Hi;no==null?Hi=null:Hi=fu(no);for(var Gi=Hi,eo=Gi??X5(n,r,e),Ki=st([Fr(i,"summary"),Fr(i,"description")]),cv=T.g1(Zr(Ki,10)),fv=Ki.x();fv.y();){var vv=fv.z(),Tw=b(hg(Os(vv)?vv:g()));cv.n(Tw)}for(var hv=T.m(),dv=cv.x();dv.y();){var pv=dv.z();C(pv)>0&&hv.n(pv)}var qw=fa(hv),Ow="@deprecated",du;ww(i)?du=Ow:du=null;var jw=du,Uw=n.x1i_1,Nw=e.toUpperCase(),_v=Uw.o2(Nw+" "+r),pu;_v==null?pu=null:pu="@see "+_v;var Dw=Ee(qw,st([jw,pu])),Lw=M7(Ga,Ji,k,Qs,e,Bi),gv=V(fa(ro.q2())," | "),_u;C(gv)===0?_u=null:_u=gv;var Pw=_u;return new Cy(Ka,r,eo,Dw,x,Lw,a,Ji,Bt,Pw,Ei(ro.p2()))}function K5(n,r){var e=Fr(r,"$ref"),t;if(e==null)t=null;else{var i=n.o1i_1.o2(Aa(e,47));t=i instanceof nr?i:null}for(var a=t,s=a??r,o=ar(s,"properties"),u=o??Tr(),c=vr.q4(),f=u.r2().x();f.y();){var v=f.z(),h=v.l2(),d=h instanceof nr?h:null;(d==null?null:bw(d))===!0&&c.s2(v.k2(),v.l2())}return Ei(c.p2())}function W5(n,r){var e=rn.f();e.da(96);for(var t=0,i=Ky().xe(r).x();i.y();){var a=i.z();e.ca(yc(n,ie(r,t,a.ze().r1_1))),e.ca("${encodeURIComponent("+yw(a.xf().d1(1))+")}"),t=a.ze().s1_1+1|0}return e.ca(yc(n,at(r,t))),e.da(96),e.toString()}function Y5(n,r,e){for(var t=ar(r,"responses"),i=(t??Tr()).r2(),a=T.m(),s=i.x();s.y();){var o=s.z(),u;r:{var c=o.k2(),f=o.l2(),v=Nl(c),h;if(v==null)h=null;else{var d;v>=400?d=v:d=null,h=d}var _=h,m;if(_==null){u=null;break r}else m=_;var w=m,x=ar(jr(f),"content"),k;if(x==null){u=null;break r}else k=x;var S=k,z=bc(n,S),I;if(z==null){u=null;break r}else I=z;var A=I;u=j(w,$n(n,A,e))}var q=u;q==null||a.n(q)}return vu(W_(a))}function Z5(n,r,e){var t=ar(r,"responses"),i;if(t==null)return"unknown";i=t;for(var a=i,s=a.r2(),o=T.m(),u=s.x();u.y();){var c=u.z(),f=c.k2();ze(f,"2")&&o.n(c)}var v;r:{var h=o.x();if(!h.y()){v=null;break r}var d=h.z();if(!h.y()){v=d;break r}var _=d.k2(),m=_;do{var w=h.z(),x=w.k2(),k=x;je(m,k)>0&&(d=w,m=k)}while(h.y());v=d}var S=v,z=S==null?null:S.l2(),I=z==null?null:jr(z),A;if(I==null)return"unknown";A=I;var q=A,N=ar(q,"content"),$;if(N==null)return"void";$=N;var O=$,L=ar(O,"text/event-stream");if(L!=null){var H=ar(L,"schema"),B;H==null?B=null:B=$n(n,H,e);var F=B;return F??"string"}var R=O.p2(),X;r:{for(var J=R.x();J.y();){var er=J.z();if(ws(er,"json")){X=er;break r}}X=null}var Y=X;if(Y!=null){var G=ar(O,Y),sr=G==null?null:ar(G,"schema"),ur;sr==null?ur=null:ur=$n(n,sr,e);var Q=ur;return Q??"unknown"}return"string"}function V5(n,r){for(var e=ar(r,"responses"),t=e??Tr(),i=vr.q4(),a=t.r2().x();a.y();){var s=a.z(),o=s.k2();ze(o,"2")&&i.s2(s.k2(),s.l2())}var u=i.q2(),c;r:{var f;if(E(u,W)?f=u.i1():f=!1,f){c=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d=h instanceof nr?h:null,_=d==null?null:ar(d,"content");if((_==null?null:_.b18("text/event-stream"))===!0){c=!0;break r}}c=!1}return c}function bc(n,r){var e=r.p2(),t;r:{for(var i=e.x();i.y();){var a=i.z();if(ws(a,"json")){t=a;break r}}t=null}var s=t,o=s??Ib(r.p2()),u;if(o==null)u=null;else{var c=ar(r,o);u=c==null?null:ar(c,"schema")}return u}function gw(n,r){var e=n.r1i_1,t;r:{for(var i=e.x();i.y();){var a=i.z();if(r===a||ze(r,a+"/")){t=a;break r}}t=null}var s=t,o=s??"",u=ug(cg(r,o),ba([47])),c;r:{for(var f=u.x();f.y();){var v=f.z(),h;if(C(v)>0?h=!ze(v,"{"):h=!1,h){c=v;break r}}c=null}var d=c,_;d==null?_=null:_=ov(d,rv());var m=_;return m??"root"}function X5(n,r,e){var t=n.r1i_1,i;r:{for(var a=t.x();a.y();){var s=a.z();if(r===s||ze(r,s+"/")){i=s;break r}}i=null}for(var o=i,u=o??"",c=ug(cg(r,u),ba([47])),f=T.m(),v=c.x();v.y();){var h=v.z();C(h)>0&&f.n(h)}for(var d=f,_=T.m(),m=d.x();m.y();){var w=m.z();ze(w,"{")||_.n(w)}var x=Cb(_,1);if(!x.i1()){var k=e==="post"?"":e;return fu(k+V(x,"",l,l,l,l,R7))}var S=Mp(d),z=(S==null?null:ze(S,"{"))===!0;switch(e){case"get":return z?"get":"list";case"post":return"create";case"put":return"update";default:return e}}function mw(n,r){var e=Fr(r,"description"),t;e==null?t=null:t=b(hg(Os(e)?e:g()));var i=t,a;if(i==null)a=null;else{var s;C(i)===0?s=null:s=i,a=s}var o=a,u="@deprecated",c;ww(r)?c=u:c=null;var f=c;return st([o,f])}function gl(n,r,e){if(r.i1())return"";var t=fg(Yn(V(r,`

`),"*/","*\\/"));if(t.c1()===1)return e+"/** "+Pp(t)+` */
`;var i=e+`/**
`;return i+V(t,"",l,l,l,l,B7(e))+(e+` */
`)}function Q5(n){return"'"+n.l1h_1+"'"}function r7(n){return`
`+n.p1g()}function n7(n){var r=n.hh();return r+` text eol=lf linguist-generated merge=ktor-svelte
`}function kc(n,r,e){var t;if(e instanceof nr){var i=Fr(e,"$ref"),a=i==null?null:Aa(i,47),s;a==null?s=null:s=n.o2(a);var o=s,u;if(o==null){for(var c=vr.ha(e.c1()),f=e.r2().x();f.y();){var v=f.z(),h=v.k2(),d=kc(n,r,v.l2());c.s2(h,d)}u=new nr(c)}else u=b5(r,o);t=u}else if(e instanceof fn){for(var _=T.g1(Zr(e,10)),m=e.x();m.y();){var w=m.z(),x=kc(n,r,w);_.n(x)}t=new fn(_)}else t=e;return t}function e7(n,r){var e=n.b1j_1,t=r.b1j_1;return jt(e,t)}function t7(n){var r=n.c1j_1,e;r==null?e=null:e=", permission: "+ve(r);var t=e,i=t??"";return"    { page: "+ve(n.b1j_1)+i+` },
`}function i7(n){var r=n.k2(),e=n.l2();return $e(r)+": "+ve(e)}function a7(n,r){var e=n.ch_1,t=r.ch_1;return jt(e,t)}function s7(n){return n.dh_1}function o7(n){return r=>fe(n,re(r))}function l7(n){var r=n.hh(),e=n.ih();return r+": "+e}function Kh(n,r,e,t,i,a){var s=be(n,r,t);if(s!=null)return At(s);var o=be(n,r,i),u;if(o==null)return null;u=o;var c=u;return e?At(c+a):null}function u7(n){return n+`
`}function Jt(n,r,e){return"addError(errors, "+n+", "+fe(r,re(e))+");"}function c7(n,r){return e=>"matches("+fe(n,re(e.a1l_1))+", "+r+")"}function f7(n){return r=>"    "+$e(r)+": "+fe(n,re(r))+`,
`}function na(n,r,e,t,i,a,s){if(t instanceof fn)for(var o=t.x();o.y();){var u=o.z();na(n,r,e,u,i,a,!1)}else if(t instanceof nr){var c=cu(n,t),f;if(c==null)f=null;else{var v;s?v=null:v=c,f=v}var h=f;if(h!=null){var d=it(h),_=r.o2(d),m;if(_==null){var w=T.m();r.s2(d,w),m=w}else m=_;var x=m,k=new Iy(i,a);x.n(k);var S=it(h),z=e.o2(S);if(z==null){var I=h;e.s2(S,I)}}for(var A=Fr(t,"in")!=null?Fr(t,"name"):null,q=t.r2().x();q.y();){var N=q.z(),$=N.k2(),O=N.l2(),L;if($==="properties"?L=O instanceof nr:L=!1,L)for(var H=O.r2().x();H.y();){var B=H.z(),F=B.k2(),R=B.l2();na(n,r,e,R,i,F,!1)}else $==="schema"&&A!=null?na(n,r,e,O,i,A,!1):$!=="enum"&&na(n,r,e,O,i,a,!1)}}}function v7(n){return(r,e)=>{var t=V(fi(Se(n,r)),"\0"),i=V(fi(Se(n,e)),"\0");return jt(t,i)}}function h7(n){return n.d1k_1}function d7(n){return n.e1k_1}function p7(n){return n+1|0}function _7(n){return r=>n+r}function g7(n,r,e,t){return i=>"..."+si(n,jr(i),r,e,t)}function m7(n,r,e,t){return i=>si(n,jr(i),r,e,t)}function y7(n){return Fe(r=>{var e=n;return fe(e,r)},1,0,8,"literal",[n])}function w7(n,r,e){return t=>$n(n,jr(t),r,e)}function b7(n,r,e){return t=>$n(n,jr(t),r,e)}function k7(n,r,e,t,i,a,s,o){return u=>{var c=n,f=u.l1k_1;Ia(c,f);var v=H5(r,u.h1k_1,u.j1k_1,e),h=t+"."+v,d=r.w1i_1,_=new uu(h,u.f1k_1,u.g1k_1);d.n(_);var m=u.o1k_1;if(m!=null){var w=i,x=new Ay(h,m,u.p1k_1);w.n(x)}var k=u.n1k_1;k==null||a.s2(h,k);var S=J5(r,t+"-"+v,s);return o.ca(gl(r,u.i1k_1,"")),o.ca("export const "+S+" = "+u.k1k_1(h)+`;
`),gl(r,u.i1k_1,"    ")+("    "+$e(v)+": "+S+",")}}function x7(n,r){var e=n.k2(),t=r.k2();return jt(e,t)}function Wh(n){return Fr(n,"type")==="string"&&Fr(n,"format")==="binary"}function S7(n){return r=>{var e=r.k2(),t=r.l2(),i=jr(t),a;if(Wh(i))a="File";else{var s;if(Fr(i,"type")==="array"){var o=ar(i,"items"),u;o==null?u=null:u=Wh(o),s=u===!0}else s=!1;s?a="File[]":a="string"}var c=a;return $e(e)+(n.l1(e)?"":"?")+": "+c}}function E7(n){return ve(n)}function z7(n){return"    "+$e(n)+": "+ve(n)+`,
`}function I7(n){return"    '"+n.q1k_1+"': "+n.r1k_1+`;
`}function C7(n){return"    '"+n.q1k_1+"': ["+V(n.s1k_1)+`],
`}function A7(n){return n+1|0}function T7(n){return r=>r===1?n:n+r}function q7(n){return sv(n)}function O7(n){return n+1|0}function j7(n){return r=>n+r}function U7(n){return n.xf().d1(1)}function N7(n){return ve(n)}function D7(n,r){return e=>{var t=e.c18("required"),i=t==null?null:An(t),a=(i==null?null:Bn(i))==="true",s=ar(e,"schema"),o;s==null?o=null:o=$n(n,s,r);var u=o,c;if(u==null)c=null;else{var f;u!=="unknown"?f=u:f=null,c=f}var v=c,h=v??"string",d=Fr(e,"name"),_=d??"";return $e(_)+(a?"":"?")+": "+h}}function L7(n,r){return e=>{var t=e.c18("required"),i=t==null?null:An(t),a=(i==null?null:Bn(i))==="true",s=ar(e,"schema"),o;s==null?o=null:o=$n(n,s,r);var u=o,c;if(u==null)c=null;else{var f;u!=="unknown"?f=u:f=null,c=f}var v=c,h=v??"string",d=Fr(e,"name"),_=d??"";return ve(_)+(a?"":"?")+": "+h}}function P7(n){return ve(n)}function M7(n,r,e,t,i,a){return s=>{var o=V(mi(n,"operation: '"+s+"'")),u=r?"stream":"request",c=V(e),f=i.toUpperCase();return"("+c+") => "+u+"<"+t+">('"+f+"', "+a+", { "+o+" })"}}function R7(n){return sv(n)}function B7(n){return r=>{var e;return C(r)===0?e="":e=" "+r,n+" *"+e+`
`}}function Rn(n){wr();for(var r=St.te("[^A-Za-z0-9]+").ff(n,0),e=T.m(),t=r.x();t.y();){var i=t.z();C(i)>0&&e.n(i)}var a=e,s=V(a,"",l,l,l,l,$7),o;C(s)===0?o="Unnamed":o=s;var u=o;return Bx(Rb(u))?"_"+u:u}function sv(n){wr();var r=fu(n),e;if(C(r)>0){var t=K(r,0),i=yr(t).toUpperCase();e=b(i)+at(r,1)}else e=r;return e}function fu(n){wr();for(var r=St.te("[^A-Za-z0-9]+").ff(n,0),e=T.m(),t=r.x();t.y();){var i=t.z();C(i)>0&&e.n(i)}for(var a=e,s=T.g1(Zr(a,10)),o=0,u=a.x();u.y();){var c=u.z(),f=o;o=f+1|0;var v;if(Us(f)===0){var h;if(C(c)>0){var d=K(c,0),_=yr(d).toLowerCase();h=b(_)+at(c,1)}else h=c;v=h}else{var m;if(C(c)>0){var w=K(c,0),x=yr(w).toUpperCase();m=b(x)+at(c,1)}else m=c;v=m}var k=v;s.n(k)}return V(s,"")}function ov(n,r){r=r===l?Ot():r,wr();var e=fu(n);return Qf().ue(e)&&!d5().l1(e)&&!r.l1(e)?e:"_"+e}function yw(n){return wr(),ov(n,v5())}function $e(n){return wr(),Qf().ue(n)?n:ve(n)}function ve(n){wr();var r=rn.f();r.da(39);for(var e=0;e<C(n);){var t=rr(n,e);if(e=e+1|0,t===92)r.ca("\\\\");else if(t===39)r.ca("\\'");else if(t===10)r.ca("\\n");else if(t===13)r.ca("\\r");else if(gn(t,32)<0||t===8232||t===8233){var i=Z(t);r.ca("\\u"+vg(Fx(i,16),4,48))}else r.da(t)}return r.da(39),r.toString()}function ww(n){wr();var r=n.c18("deprecated"),e=r instanceof fr?r:null;return(e==null?null:Mf(e))===!0}function bw(n){wr();var r=n.c18("readOnly"),e=r instanceof fr?r:null;return(e==null?null:Mf(e))===!0}function ar(n,r){wr();var e=n.c18(r);return e instanceof nr?e:null}function vu(n){wr();for(var r=n.r2(),e=J7,t=new Dy(e),i=zi(r,t),a=vn(Zr(i,10),16),s=vr.ha(a),o=i.x();o.y();){var u=o.z(),c=j(u.k2(),u.l2());s.s2(c.ch_1,c.dh_1)}return s}function hn(n,r){wr();var e=n.c18(r);return e instanceof fn?e:null}function Fr(n,r){wr();var e=n.c18(r),t=e instanceof fr?e:null;return t==null?null:Bn(t)}function hu(n,r){wr();for(var e=hn(n,r),t=e??dr(),i=T.g1(Zr(t,10)),a=t.x();a.y();){var s=a.z(),o=An(s).w17();i.n(o)}return i}function lv(n){wr();var r=Fr(n,"format"),e;return r==null?e=null:e=Xy().o2(r),e}function kw(n){wr();var r=Fr(n,"format"),e;return r==null?e=null:e=_o().o2(r),e}function ml(n,r){wr();var e;if(n instanceof nr){var t,i=Fr(n,"format");if((E(r,mn)?r:g()).m2(i))t=!0;else{var a=n.q2(),s;r:{var o;if(E(a,W)?o=a.i1():o=!1,o){s=!1;break r}for(var u=a.x();u.y();){var c=u.z();if(ml(c,r)){s=!0;break r}}s=!1}t=s}e=t}else if(n instanceof fn){var f;r:{var v;if(E(n,W)?v=n.i1():v=!1,v){f=!1;break r}for(var h=n.x();h.y();){var d=h.z();if(ml(d,r)){f=!0;break r}}f=!1}e=f}else e=!1;return e}function yl(n){wr();var r;if(n instanceof nr){var e;if(lv(n)!=null)e=!0;else{var t=n.q2(),i;r:{var a;if(E(t,W)?a=t.i1():a=!1,a){i=!1;break r}for(var s=t.x();s.y();){var o=s.z();if(yl(o)){i=!0;break r}}i=!1}e=i}r=e}else if(n instanceof fn){var u;r:{var c;if(E(n,W)?c=n.i1():c=!1,c){u=!1;break r}for(var f=n.x();f.y();){var v=f.z();if(yl(v)){u=!0;break r}}u=!1}r=u}else r=!1;return r}var Yh;function uv(){if(Yh)return or;Yh=!0,xw=new po("ADD_ERROR",0,"add-error.ts"),Sw=new po("ADD_NESTED",1,"add-nested.ts"),Ew=new po("MATCHES",2,"matches.ts")}var xw,Sw,Ew;function F7(n){return wr(),n.h16_1=!0,or}function $7(n){return wr(),sv(n)}function J7(n,r){wr();var e=n.k2(),t=r.k2();return jt(e,t)}function zw(){return uv(),xw}function H7(){return uv(),Sw}function Zh(){return uv(),Ew}var Vh;function wr(){Vh||(Vh=!0,Hy=kt(["get","post","put","patch","delete","head","options"]),Gy=St.te("[A-Za-z_$][A-Za-z0-9_$]*"),Wy=St.te("\\{([^}]+)\\}"),Zy=UI(l,F7),Vy=kt(["guardPages","signedInUser","pageGuards"]),Qy=nh([j("date","IsoDate"),j("time","IsoTime"),j("date-time","IsoDateTime")]),rw=nh([j("duration","IsoDuration"),j("decimal","Decimal")]),nw=Ol([j("IsoDuration","'PT0S'"),j("Decimal","'0'")]),ew=ii(["string","integer","number"]),tw=`export function hasErrorCode<C extends ErrorCode>(error: unknown, code: C): error is ApiError<{ message: string; code: C }> {
    return errorCode(error) === code;
}

export function setCodeMessages(messages: Partial<Record<ErrorCode, string | (() => string)>>): void {
    Object.assign(codeMessages, messages);
}

`,iw=ii(["api","request","stream","ApiError","errorStatuses","isApiError","publicConfig","loadPublicConfig","uploadRules","hasErrorCode","setCodeMessages"]),aw=ii(["body","query","headers","options","encodeURIComponent"]),sw=ii(["accept","content-type","content-length","cookie","x-request-id","idempotency-key","x-time-zone"]),ow=ii(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]),lw=kt(["minLength","maxLength","minimum","maximum","exclusiveMinimum","exclusiveMaximum","pattern"]))}function Xh(n,r){return r===1?"1 character":""+r+" characters"}var Xi;function At(n){return n%1===0?jn(n).toString():n.toString()}var xc;function Iw(){return xc===l&&new Py,xc}function G7(){return Aw(),Cw}var Cw;function Le(n){return Aw(),Se(G7(),n)}var Qh;function Aw(){Qh||(Qh=!0,Cw=Ol([j("add-error.ts",`function addError(errors: Record<string, string[]>, field: string, message: string): void {
    (errors[field] ??= []).push(message);
}
`),j("add-nested.ts",`function addNested(errors: Record<string, string[]>, prefix: string, nested: Record<string, string[]>): void {
    for (const [field, messages] of Object.entries(nested)) {
        for (const message of messages) addError(errors, prefix + field, message);
    }
}
`),j("api-with.ts",`
function bindFetch<T extends object>(target: T, fetch: typeof globalThis.fetch): T {
    const bound: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(target)) {
        if (typeof value !== 'function') {
            bound[key] = bindFetch(value as object, fetch);
            continue;
        }
        const arity = value.length;
        bound[key] = (...args: unknown[]) => {
            const padded = args.slice(0, arity);
            padded.length = arity;
            padded[arity - 1] = { fetch, ...(padded[arity - 1] as RequestOptions | undefined) };
            return value(...padded);
        };
    }
    return bound as T;
}

export function apiWith(event: { fetch: typeof globalThis.fetch }): typeof api {
    return bindFetch(api, event.fetch);
}
`),j("client.ts",`export interface UploadProgress {
    loaded: number;
    total?: number;
}

export interface RetryConfig {
    attempts?: number;
    delay?: number;
    maxDelay?: number;
}

export interface RequestOptions extends Omit<RequestInit, 'method' | 'body'> {
    fetch?: typeof fetch;
    onUploadProgress?: (progress: UploadProgress) => void;
    timeout?: number;
    silent?: boolean;
    retry?: boolean | RetryConfig;
    refresh?: boolean;
}

export interface ApiConfig {
    baseUrl: string;
    headers: Record<string, string>;
    fetch?: typeof fetch;
    onUnauthorized?: (response: Response) => void;
    loginPage?: string;
    sessionWarning?: number;
    dedupeGets?: boolean;
    idempotencyKeys?: boolean;
    timeout?: number;
    onNewBuild?: (build: string) => void;
    onError?: (error: unknown) => void;
    retry?: boolean | RetryConfig;
    sendTimeZone?: boolean;
    onWrite?: () => void;
    onToast?: (message: string, kind: ServerToastKind) => void;
    onNavigate?: (path: string) => void;
}

export type ServerToastKind = 'info' | 'success' | 'warning' | 'error';

export function isTimeoutError(error: unknown): boolean {
    return error instanceof DOMException && error.name === 'TimeoutError';
}

export const apiConfig: ApiConfig = { baseUrl: '', headers: {} };

export class ApiError<E = unknown> extends Error {
    constructor(
        readonly status: number,
        readonly body: E,
        readonly url: string,
        readonly operation?: string,
        readonly requestId?: string,
        readonly retryAfter?: number
    ) {
        super(\`Request to \${url} failed with status \${status}\`);
        this.name = 'ApiError';
    }
}

export function isRateLimitError(error: unknown): error is ApiError {
    return error instanceof ApiError && error.status === 429;
}

export interface ValidationProblem {
    message: string;
    fields: Record<string, string[]>;
}

export function isValidationError(error: unknown): error is ApiError<ValidationProblem> {
    return (
        error instanceof ApiError &&
        error.status === 422 &&
        typeof error.body === 'object' &&
        error.body !== null &&
        'fields' in error.body
    );
}

export const errorMessages = {
    network: 'Could not reach the server. Check your connection and try again.',
    timeout: 'The server took too long to answer. Please try again.',
    failed: 'Something went wrong. Please try again.'
};

export type Patch<T> = { [K in keyof T]?: T[K] };

export function patchOf<T extends object>(before: T, after: T): Patch<T> {
    const patch: Patch<T> = {};
    for (const key of Object.keys(after) as (keyof T)[]) {
        const next = after[key] === undefined ? null : after[key];
        if (JSON.stringify(before[key] ?? null) !== JSON.stringify(next)) patch[key] = next as T[keyof T];
    }
    return patch;
}

export function applyPatch<T extends object>(target: T, patch: Patch<T>): T {
    return { ...target, ...patch };
}

export interface VersionConflict<T = unknown> {
    message: string;
    code: 'version.conflict';
    current: T;
}

export function isVersionConflict<T = unknown>(error: unknown): error is ApiError<VersionConflict<T>> {
    if (!(error instanceof ApiError) || error.status !== 409 || typeof error.body !== 'object' || error.body === null) return false;
    return (error.body as { code?: unknown }).code === 'version.conflict' && 'current' in error.body;
}

export const codeMessages: Record<string, string | (() => string) | undefined> = {};

export function errorCode(error: unknown): string | undefined {
    if (!(error instanceof ApiError) || typeof error.body !== 'object' || error.body === null) return undefined;
    const code = (error.body as { code?: unknown }).code;
    return typeof code === 'string' ? code : undefined;
}

export function errorMessage(error: unknown): string {
    if (isTimeoutError(error)) return errorMessages.timeout;
    if (error instanceof TypeError) return errorMessages.network;
    if (!(error instanceof ApiError)) return errorMessages.failed;
    const forCode = codeMessages[errorCode(error) ?? ''];
    if (forCode !== undefined) return typeof forCode === 'function' ? forCode() : forCode;
    const body = error.body as { message?: unknown } | null | undefined;
    const message = typeof body === 'object' && body !== null ? body.message : undefined;
    return typeof message === 'string' && message !== '' ? message : errorMessages.failed;
}

interface InternalOptions extends RequestOptions {
    query?: Record<string, unknown>;
    typedHeaders?: Record<string, string | number | boolean | undefined>;
    body?: unknown;
    operation?: string;
    upload?: UploadRules;
    multipart?: boolean;
    omit?: readonly string[];
}

export interface UploadRules {
    readonly maxBytes?: number;
    readonly types?: readonly string[];
    readonly maxFiles?: number;
}

export interface UploadProblem {
    message: string;
    code: 'upload.tooLarge' | 'upload.type' | 'upload.tooMany';
    file?: string;
}

export function isUploadError(error: unknown): error is ApiError<UploadProblem> {
    if (!(error instanceof ApiError) || typeof error.body !== 'object' || error.body === null) return false;
    const code = (error.body as { code?: unknown }).code;
    return typeof code === 'string' && code.startsWith('upload.');
}

function readableSize(bytes: number): string {
    const [value, unit] = bytes >= 1024 * 1024 ? [bytes / (1024 * 1024), 'MiB'] : bytes >= 1024 ? [bytes / 1024, 'KiB'] : [bytes, 'bytes'];
    return unit === 'bytes' ? \`\${value} bytes\` : \`\${value.toFixed(1).replace(/\\.0$/, '')} \${unit}\`;
}

function acceptsFile(types: readonly string[], file: File): boolean {
    if (types.length === 0) return true;
    const type = file.type.split(';')[0].trim().toLowerCase();
    const name = file.name.toLowerCase();
    return types.some((accepted) => {
        const wanted = accepted.trim().toLowerCase();
        if (wanted.startsWith('.')) return name.endsWith(wanted);
        return wanted.endsWith('/*') ? type.startsWith(wanted.slice(0, -1)) : type === wanted;
    });
}

export function uploadProblem(rules: UploadRules, files: Iterable<File>): (UploadProblem & { status: number }) | undefined {
    let count = 0;
    for (const file of files) {
        count++;
        if (rules.maxFiles !== undefined && count > rules.maxFiles) {
            const message = rules.maxFiles === 1 ? 'Only one file can be sent at once.' : \`At most \${rules.maxFiles} files can be sent at once.\`;
            return { status: 400, code: 'upload.tooMany', message };
        }
        if (!acceptsFile(rules.types ?? [], file)) {
            return { status: 415, code: 'upload.type', message: \`\${file.name} is not an accepted file type.\`, file: file.name };
        }
        if (rules.maxBytes !== undefined && file.size > rules.maxBytes) {
            const message = \`\${file.name} is larger than \${readableSize(rules.maxBytes)}.\`;
            return { status: 413, code: 'upload.tooLarge', message, file: file.name };
        }
    }
    return undefined;
}

function checkUpload(rules: UploadRules | undefined, body: unknown, url: string, operation: string | undefined) {
    if (!rules || typeof FormData === 'undefined' || !(body instanceof FormData)) return;
    const files = [...body.values()].filter((value): value is File => typeof value !== 'string');
    const problem = uploadProblem(rules, files);
    if (!problem) return;
    const { status, ...refusal } = problem;
    throw new ApiError(status, refusal, url, operation);
}

function queryString(query: Record<string, unknown> | undefined): string {
    if (!query) return '';
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(query)) {
        if (value === undefined || value === null) continue;
        for (const item of Array.isArray(value) ? value : [value]) params.append(key, String(item));
    }
    const text = params.toString();
    return text ? \`?\${text}\` : '';
}

function toFormData(fields: Record<string, unknown>): FormData {
    const form = new FormData();
    for (const [name, value] of Object.entries(fields)) {
        if (value === undefined || value === null) continue;
        for (const item of Array.isArray(value) ? value : [value]) {
            if (item instanceof Blob) form.append(name, item);
            else form.append(name, String(item));
        }
    }
    return form;
}

function isRawBody(body: unknown): body is BodyInit {
    return typeof body === 'string' || body instanceof FormData || body instanceof Blob || body instanceof URLSearchParams;
}

async function parseResponse(response: Response): Promise<unknown> {
    if (response.status === 204 || response.status === 205) return undefined;
    const contentType = response.headers.get('content-type') ?? '';
    if (contentType.includes('json')) return response.json();
    const text = await response.text();
    return text === '' ? undefined : text;
}

function responseHeaders(raw: string): Headers {
    const headers = new Headers();
    for (const line of raw.trim().split(/[\\r\\n]+/)) {
        const separator = line.indexOf(':');
        if (separator > 0) headers.append(line.slice(0, separator).trim(), line.slice(separator + 1).trim());
    }
    return headers;
}

function sendWithProgress(onProgress: (progress: UploadProgress) => void): typeof fetch {
    return (input, init = {}) =>
        new Promise<Response>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(init.method ?? 'GET', String(input));
            new Headers(init.headers).forEach((value, key) => xhr.setRequestHeader(key, value));
            xhr.withCredentials = init.credentials === 'include';
            xhr.responseType = 'blob';
            xhr.upload.onprogress = (event) => onProgress({ loaded: event.loaded, total: event.lengthComputable ? event.total : undefined });
            xhr.onload = () => {
                const empty = [101, 204, 205, 304].includes(xhr.status);
                const headers = responseHeaders(xhr.getAllResponseHeaders());
                resolve(new Response(empty ? null : xhr.response, { status: xhr.status, statusText: xhr.statusText, headers }));
            };
            xhr.onerror = () => reject(new TypeError('Network request failed'));
            xhr.onabort = () => reject(new DOMException('The upload was aborted.', 'AbortError'));
            init.signal?.addEventListener('abort', () => xhr.abort());
            xhr.send((init.body ?? null) as XMLHttpRequestBodyInit | null);
        });
}

const userWatchers: { gone: () => void; changed: () => void; ends?: (seconds: number) => void }[] = [];

function isSameOrigin(url: string): boolean {
    if (typeof location === 'undefined') return !/^[a-z][a-z0-9+.-]*:/i.test(url);
    return new URL(url, location.href).origin === location.origin;
}

function newRequestId(): string {
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
    return \`\${Date.now().toString(36)}-\${Math.random().toString(36).slice(2, 12)}\`;
}

function withTimeout(signal: AbortSignal | null | undefined, timeout: number | undefined): AbortSignal | undefined {
    if (!timeout || timeout <= 0) return signal ?? undefined;
    const timer = AbortSignal.timeout(timeout);
    return signal ? AbortSignal.any([signal, timer]) : timer;
}

const RETRIED_STATUSES = [502, 503, 504];

function retryPlan(method: string, own: boolean | RetryConfig | undefined): Required<RetryConfig> | undefined {
    const chosen = own ?? apiConfig.retry;
    if (!chosen) return undefined;
    if (method !== 'GET' && (!own || apiConfig.idempotencyKeys === false)) return undefined;
    const config = chosen === true ? {} : chosen;
    return { attempts: config.attempts ?? 3, delay: config.delay ?? 300, maxDelay: config.maxDelay ?? 5000 };
}

function isRetryable(error: unknown): boolean {
    if (isTimeoutError(error) || error instanceof TypeError) return true;
    if (error instanceof ApiError && error.status === 409 && errorCode(error) === 'idempotency.inProgress') return true;
    return error instanceof ApiError && RETRIED_STATUSES.includes(error.status);
}

function pause(milliseconds: number, signal: AbortSignal | null | undefined): Promise<void> {
    return new Promise((resolve, reject) => {
        const aborted = () => signal?.reason ?? new DOMException('The request was aborted.', 'AbortError');
        if (signal?.aborted) return reject(aborted());
        const stop = () => {
            clearTimeout(timer);
            reject(aborted());
        };
        const timer = setTimeout(() => {
            signal?.removeEventListener('abort', stop);
            resolve();
        }, milliseconds);
        signal?.addEventListener('abort', stop, { once: true });
    });
}

function retryAfter(response: Response): number | undefined {
    const value = response.headers.get('retry-after')?.trim();
    if (!value) return undefined;
    if (/^\\d+$/.test(value)) return Number(value) * 1000;
    const date = Date.parse(value);
    return Number.isNaN(date) ? undefined : Math.max(0, date - Date.now());
}

async function withRetry<T>(
    call: () => Promise<T>,
    plan: Required<RetryConfig> | undefined,
    longestLimitWait: number | undefined,
    signal: AbortSignal | null | undefined
): Promise<T> {
    let waitedForLimit = false;
    for (let tried = 1; ; tried++) {
        try {
            return await call();
        } catch (error) {
            const wait = isRateLimitError(error) ? error.retryAfter : undefined;
            if (!waitedForLimit && wait !== undefined && longestLimitWait !== undefined && wait <= longestLimitWait) {
                waitedForLimit = true;
                tried--;
                await pause(wait, signal);
                continue;
            }
            if (!plan || tried >= plan.attempts || !isRetryable(error)) throw error;
            await pause(Math.min(plan.delay * 2 ** (tried - 1), plan.maxDelay), signal);
        }
    }
}

let ownTimeZone: string | undefined | null = null;

function timeZone(): string | undefined {
    if (ownTimeZone === null) {
        try {
            ownTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || undefined;
        } catch {
            ownTimeZone = undefined;
        }
    }
    return ownTimeZone;
}

function withoutKeys(body: unknown, keys: readonly string[]): unknown {
    if (body === null || typeof body !== 'object' || Array.isArray(body) || isRawBody(body)) return body;
    const copy: Record<string, unknown> = { ...(body as Record<string, unknown>) };
    for (const key of keys) delete copy[key];
    return copy;
}

function prepare(method: string, path: string, options: InternalOptions, accept: string, streaming = false) {
    const {
        query,
        typedHeaders,
        body: sent,
        operation,
        upload,
        multipart,
        omit,
        fetch: customFetch,
        headers,
        onUploadProgress,
        timeout,
        signal,
        silent,
        retry,
        refresh,
        ...init
    } = options;
    const given = omit?.length ? withoutKeys(sent, omit) : sent;
    const body = multipart && given !== undefined && !isRawBody(given) ? toFormData(given as Record<string, unknown>) : given;
    const plan = streaming ? undefined : retryPlan(method, retry);
    const chosenRetry = retry ?? apiConfig.retry;
    const longestLimitWait = streaming || !chosenRetry ? undefined : ((chosenRetry === true ? undefined : chosenRetry.maxDelay) ?? 5000);
    const limit = timeout ?? (streaming ? undefined : apiConfig.timeout);
    const send = onUploadProgress ? sendWithProgress(onUploadProgress) : (customFetch ?? apiConfig.fetch ?? fetch);
    const url = apiConfig.baseUrl + path + queryString(query);
    const merged = new Headers(apiConfig.headers);
    merged.set('Accept', accept);
    if (!merged.has('X-Request-Id') && isSameOrigin(url)) merged.set('X-Request-Id', newRequestId());
    const write = method !== 'GET' && method !== 'HEAD' && method !== 'OPTIONS';
    if (write && apiConfig.idempotencyKeys !== false && !merged.has('Idempotency-Key') && isSameOrigin(url)) {
        merged.set('Idempotency-Key', newRequestId());
    }
    const zone = apiConfig.sendTimeZone === false || !isSameOrigin(url) ? undefined : timeZone();
    if (zone && !merged.has('X-Time-Zone')) merged.set('X-Time-Zone', zone);
    for (const [key, value] of Object.entries(typedHeaders ?? {})) if (value !== undefined) merged.set(key, String(value));
    new Headers(headers).forEach((value, key) => merged.set(key, value));
    let payload: BodyInit | undefined;
    if (body !== undefined) {
        payload = isRawBody(body) ? body : JSON.stringify(body);
        if (!isRawBody(body) && !merged.has('Content-Type')) merged.set('Content-Type', 'application/json');
    }
    return {
        url,
        operation,
        send: async () => {
            checkUpload(upload, body, url, operation);
            return send(url, { ...init, method, headers: merged, body: payload, signal: withTimeout(signal, limit) });
        },
        attempt: <T>(call: () => Promise<T>) => withRetry(call, plan, longestLimitWait, signal)
    };
}

let knownBuild: string | undefined;

function noticeBuild(response: Response) {
    const build = response.headers.get('x-ktor-svelte-build');
    if (!build) return;
    if (knownBuild !== undefined && build !== knownBuild) apiConfig.onNewBuild?.(build);
    knownBuild = build;
}

const toastKinds: readonly string[] = ['info', 'success', 'warning', 'error'];

function noticeToasts(response: Response, url: string) {
    const sent = response.headers.get('x-ktor-svelte-toast');
    if (!sent || !apiConfig.onToast || typeof document === 'undefined' || !isSameOrigin(url)) return;
    for (const part of sent.split(',')) {
        const at = part.indexOf(':');
        const kind = part.slice(0, at).trim();
        if (at < 0 || !toastKinds.includes(kind)) continue;
        try {
            apiConfig.onToast(decodeURIComponent(part.slice(at + 1).trim()), kind as ServerToastKind);
        } catch {
            continue;
        }
    }
}

function noticeNavigation(response: Response, url: string) {
    const path = response.headers.get('x-ktor-svelte-navigate');
    if (!path || !apiConfig.onNavigate || typeof document === 'undefined' || !isSameOrigin(url)) return;
    if (!/^\\/(?![/\\\\])/.test(path)) return;
    setTimeout(() => apiConfig.onNavigate?.(path), 0);
}

function insideApp(path: string | null | undefined): path is string {
    return typeof path === 'string' && /^\\/(?![/\\\\])/.test(path);
}

type PageAddress = string | { pathname: string; search: string; hash?: string };

function pathOf(address: PageAddress): string {
    return typeof address === 'string' ? address : address.pathname + address.search + (address.hash ?? '');
}

export function loginPath(from?: PageAddress): string {
    const page = apiConfig.loginPage;
    if (!page) throw new Error('loginPath needs the login page. Say it once on the server: install(Svelte) { loginPage = "/login" }.');
    const here = from === undefined ? (typeof location === 'undefined' ? undefined : pathOf(location)) : pathOf(from);
    if (!insideApp(here)) return page;
    const onLoginPage = (here.split(/[?#]/)[0].replace(/\\/$/, '') || '/') === (page.replace(/\\/$/, '') || '/');
    return onLoginPage ? page : \`\${page}?next=\${encodeURIComponent(here)}\`;
}

export function afterLogin(fallback = '/', from?: PageAddress): string {
    const address = from === undefined ? (typeof location === 'undefined' ? '' : pathOf(location)) : pathOf(from);
    const query = address.split('#')[0].split('?')[1] ?? '';
    const next = new URLSearchParams(query).get('next');
    return insideApp(next) ? next : fallback;
}

function toLogin(silent: boolean | undefined) {
    if (silent || !apiConfig.loginPage || typeof location === 'undefined') return;
    const target = loginPath();
    if (target === apiConfig.loginPage) return;
    setTimeout(() => (apiConfig.onNavigate ?? ((path: string) => location.assign(path)))(target), 0);
}

async function checked(response: Response, url: string, operation: string | undefined, silent?: boolean): Promise<Response> {
    noticeBuild(response);
    noticeToasts(response, url);
    if (response.ok) noticeNavigation(response, url);
    if (isSameOrigin(url)) {
        if (response.status === 401) for (const watcher of userWatchers) watcher.gone();
        else if (response.headers.get('x-ktor-svelte-user') === 'changed') for (const watcher of userWatchers) watcher.changed();
        const left = response.headers.get('x-ktor-svelte-session');
        if (left !== null && response.ok && Number.isFinite(Number(left))) for (const watcher of userWatchers) watcher.ends?.(Number(left));
    }
    if (response.status === 401) {
        if (apiConfig.onUnauthorized) apiConfig.onUnauthorized(response);
        else if (isSameOrigin(url)) toLogin(silent);
    }
    if (!response.ok) {
        const requestId = response.headers.get('x-request-id') ?? undefined;
        throw new ApiError(response.status, await parseResponse(response), url, operation, requestId, retryAfter(response));
    }
    return response;
}

function report(error: unknown, silent: boolean | undefined) {
    if (silent || isAbortError(error)) return;
    try {
        apiConfig.onError?.(error);
    } catch {
        return;
    }
}

let writeNoticed = false;

function noticeWrite(method: string, options: InternalOptions) {
    if (method === 'GET' || method === 'HEAD' || options.refresh === false || !apiConfig.onWrite || writeNoticed) return;
    writeNoticed = true;
    setTimeout(() => {
        writeNoticed = false;
        try {
            apiConfig.onWrite?.();
        } catch {
            return;
        }
    }, 0);
}

const inFlight = new Map<string, Promise<unknown>>();

function isShareable(method: string, options: InternalOptions): boolean {
    return apiConfig.dedupeGets === true && method === 'GET' && !options.signal && !options.fetch && !options.headers;
}

const prefetched = new Map<string, { response: Promise<unknown>; expires: number }>();
let prefetchUntil: number | undefined;

function fromPrefetch<T>(url: string, run: (silent?: boolean) => Promise<T>): Promise<T> | undefined {
    const until = prefetchUntil;
    prefetchUntil = undefined;
    const hit = prefetched.get(url);
    const fresh = hit !== undefined && hit.expires > Date.now();
    if (hit && !fresh) prefetched.delete(url);
    if (until === undefined) {
        if (!fresh) return undefined;
        prefetched.delete(url);
        return hit.response as Promise<T>;
    }
    if (fresh) return hit.response as Promise<T>;
    const response = run(true);
    prefetched.set(url, { response, expires: until });
    response.catch(() => prefetched.delete(url));
    return response;
}

let writesInFlight = 0;
const pendingWatchers = new Set<(count: number) => void>();

export function watchPendingWrites(watcher: (count: number) => void): () => void {
    pendingWatchers.add(watcher);
    watcher(writesInFlight);
    return () => {
        pendingWatchers.delete(watcher);
    };
}

function changePendingWrites(by: number) {
    writesInFlight += by;
    for (const watcher of pendingWatchers) {
        try {
            watcher(writesInFlight);
        } catch {
            continue;
        }
    }
}

export async function request<T>(method: string, path: string, options: InternalOptions = {}): Promise<T> {
    if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS') return sendRequest<T>(method, path, options);
    changePendingWrites(1);
    try {
        return await sendRequest<T>(method, path, options);
    } finally {
        changePendingWrites(-1);
    }
}

async function sendRequest<T>(method: string, path: string, options: InternalOptions): Promise<T> {
    const { url, operation, send, attempt } = prepare(method, path, options, 'application/json');
    const run = async (silent = options.silent) => {
        try {
            const answer = async () => parseResponse(await checked(await send(), url, operation, options.silent));
            const result = (await attempt(answer)) as T;
            noticeWrite(method, options);
            return result;
        } catch (error) {
            report(error, silent);
            throw error;
        }
    };
    if (method === 'GET' && !options.signal && !options.headers) {
        const early = fromPrefetch(url, run);
        if (early) return early;
    } else {
        prefetchUntil = undefined;
    }
    if (!isShareable(method, options)) return run();
    const pending = inFlight.get(url) ?? run().finally(() => inFlight.delete(url));
    inFlight.set(url, pending);
    return pending as Promise<T>;
}

function eventData<T>(data: string): T {
    try {
        return JSON.parse(data) as T;
    } catch {
        return data as T;
    }
}

export async function* stream<T>(method: string, path: string, options: InternalOptions = {}): AsyncGenerator<T, void, undefined> {
    const { url, operation, send } = prepare(method, path, options, 'text/event-stream', true);
    let response: Response;
    try {
        response = await checked(await send(), url, operation, options.silent);
    } catch (error) {
        report(error, options.silent);
        throw error;
    }
    if (!response.body) return;
    const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
    let buffer = '';
    try {
        for (;;) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += value;
            const frames = buffer.split(/\\r?\\n\\r?\\n/);
            buffer = frames.pop() ?? '';
            for (const frame of frames) {
                const data = frame
                    .split(/\\r?\\n/)
                    .filter((line) => line.startsWith('data:'))
                    .map((line) => line.slice(5).replace(/^ /, ''))
                    .join('\\n');
                if (data !== '') yield eventData<T>(data);
            }
        }
    } finally {
        reader.cancel().catch(() => undefined);
    }
}

export interface UserState<T, P extends string = string> {
    user: T | null;
    ready: boolean;
    sessionEnds?: number | null;
    sessionEnding?: boolean;
    permissions?: P[];
}

interface UserAnswer<T, P extends string> {
    user?: T | null;
    sessionSeconds?: number | null;
    permissions?: P[] | null;
}

const LONGEST_TIMER = 2_000_000_000;

export interface UserStore<T, P extends string = string> {
    readonly user: T | null;
    readonly ready: boolean;
    readonly signedIn: boolean;
    readonly sessionEnds: Date | null;
    readonly sessionEnding: boolean;
    extend(): Promise<T | null>;
    can(permission: P): boolean;
    load(): Promise<T | null>;
    reload(): Promise<T | null>;
    set(user: T | null): void;
    clear(): void;
}

export function userStore<T, P extends string = string>(path: string, state: UserState<T, P>): UserStore<T, P> {
    let pending: Promise<T | null> | undefined;
    let turn = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const plan = (ends: number | null) => {
        if (timer !== undefined) clearTimeout(timer);
        timer = undefined;
        state.sessionEnds = ends;
        if (ends === null) {
            state.sessionEnding = false;
            return;
        }
        const left = ends - Date.now();
        const warning = apiConfig.sessionWarning ?? 120_000;
        state.sessionEnding = left <= warning;
        const wait = left > warning ? left - warning : Math.max(left, 0) + 50;
        timer = setTimeout(
            () => {
                timer = undefined;
                if (state.sessionEnds !== ends) return;
                if (Date.now() < ends) return plan(ends);
                state.sessionEnding = false;
                state.sessionEnds = null;
                void ask();
            },
            Math.min(wait, LONGEST_TIMER)
        );
    };
    const endsFor = (answer: UserAnswer<T, P> | undefined): number | null =>
        answer?.user && typeof answer.sessionSeconds === 'number' ? Date.now() + answer.sessionSeconds * 1000 : null;
    const settle = (user: T | null) => {
        turn++;
        state.user = user;
        state.ready = true;
        if (user === null) {
            plan(null);
            state.permissions = [];
        }
        pending = Promise.resolve(user);
    };
    const ask = (method = 'GET', at = path): Promise<T | null> => {
        const mine = ++turn;
        const asked: Promise<T | null> = request<UserAnswer<T, P>>(method, at, { silent: true }).then(
            (answer) => {
                if (mine !== turn) return pending ?? null;
                state.user = answer?.user ?? null;
                state.permissions = (state.user !== null && answer?.permissions) || [];
                state.ready = true;
                plan(endsFor(answer));
                return state.user;
            },
            () => {
                if (mine !== turn) return pending ?? null;
                pending = undefined;
                state.ready = true;
                return state.user;
            }
        );
        pending = asked;
        return asked;
    };
    userWatchers.push({
        gone: () => settle(null),
        changed: () => {
            if (pending) void ask();
        },
        ends: (seconds) => {
            if (state.user !== null) plan(Date.now() + seconds * 1000);
        }
    });
    return {
        get user() {
            return state.user;
        },
        get ready() {
            return state.ready;
        },
        get signedIn() {
            return state.user !== null;
        },
        get sessionEnds() {
            return typeof state.sessionEnds === 'number' ? new Date(state.sessionEnds) : null;
        },
        get sessionEnding() {
            return state.sessionEnding === true;
        },
        extend: () => ask('POST', \`\${path}/extend\`),
        can: (permission) => state.permissions?.includes(permission) === true,
        load: () => {
            if (typeof document === 'undefined' && !apiConfig.fetch) return Promise.resolve(null);
            return pending ?? ask();
        },
        reload: () => ask(),
        set: settle,
        clear: () => settle(null)
    };
}

const reportedErrors = new Set<string>();

function sendErrorReport(path: string, error: unknown): void {
    if (typeof location === 'undefined' || reportedErrors.size >= 10) return;
    if (error instanceof ApiError && error.status < 500) return;
    const message = error instanceof Error ? \`\${error.name}: \${error.message}\` : String(error);
    if (reportedErrors.has(message)) return;
    reportedErrors.add(message);
    const report = {
        message: message.slice(0, 500),
        stack: error instanceof Error ? error.stack?.slice(0, 2000) : undefined,
        page: location.pathname,
        requestId: error instanceof ApiError ? error.requestId : undefined
    };
    try {
        const sent = (apiConfig.fetch ?? fetch)(path, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(report),
            keepalive: true
        });
        void sent.catch(() => undefined);
    } catch {
        return;
    }
}

export function reportErrors(path: string): void {
    const host = globalThis as unknown as { addEventListener?: (name: string, listener: (event: never) => void) => void; __ktorSvelteReportError?: unknown };
    host.__ktorSvelteReportError = (error: unknown) => sendErrorReport(path, error);
    if (typeof host.addEventListener !== 'function') return;
    host.addEventListener('error', (event: { error?: unknown; message?: string }) => sendErrorReport(path, event.error ?? event.message));
    host.addEventListener('unhandledrejection', (event: { reason?: unknown }) => sendErrorReport(path, event.reason));
}

interface TimingEntry {
    startTime: number;
    duration: number;
    value?: number;
    hadRecentInput?: boolean;
    interactionId?: number;
    responseStart?: number;
    name?: string;
}

export function reportVitals(path: string, sampleRate = 1): void {
    const host = globalThis as unknown as {
        PerformanceObserver?: new (seen: (list: { getEntries(): TimingEntry[] }) => void) => {
            observe(options: { type: string; buffered: boolean; durationThreshold?: number }): void;
        };
        addEventListener?: (name: string, listener: () => void) => void;
        document?: { visibilityState?: string };
        navigator?: { sendBeacon?: (url: string, body: string) => boolean };
    };
    const Observer = host.PerformanceObserver;
    if (!Observer || typeof host.addEventListener !== 'function' || typeof location === 'undefined' || Math.random() >= sampleRate) return;
    const page = location.pathname;
    const metrics: Record<string, number> = {};
    const watch = (type: string, seen: (entry: TimingEntry) => void, durationThreshold?: number) => {
        try {
            new Observer((list) => list.getEntries().forEach(seen)).observe({ type, buffered: true, durationThreshold });
        } catch {
            return;
        }
    };
    watch('navigation', (entry) => {
        if (typeof entry.responseStart === 'number' && entry.responseStart > 0) metrics.TTFB = entry.responseStart;
    });
    watch('paint', (entry) => {
        if (entry.name === 'first-contentful-paint') metrics.FCP = entry.startTime;
    });
    watch('largest-contentful-paint', (entry) => {
        metrics.LCP = entry.startTime;
    });
    watch('layout-shift', (entry) => {
        if (!entry.hadRecentInput) metrics.CLS = (metrics.CLS ?? 0) + (entry.value ?? 0);
    });
    watch(
        'event',
        (entry) => {
            if (entry.interactionId) metrics.INP = Math.max(metrics.INP ?? 0, entry.duration);
        },
        40
    );
    let sent = false;
    const send = () => {
        if (sent || Object.keys(metrics).length === 0) return;
        sent = true;
        const rounded = Object.fromEntries(Object.entries(metrics).map(([name, value]) => [name, Math.round(value * 1000) / 1000]));
        const body = JSON.stringify({ page, metrics: rounded });
        try {
            if (host.navigator?.sendBeacon?.(path, body)) return;
            void (apiConfig.fetch ?? fetch)(path, { method: 'POST', body, keepalive: true }).catch(() => undefined);
        } catch {
            return;
        }
    };
    host.addEventListener('visibilitychange', () => {
        if (host.document?.visibilityState === 'hidden') send();
    });
    host.addEventListener('pagehide', send);
}

export interface PreferenceState<T> {
    value: T;
    ready: boolean;
}

export interface PreferenceStore<T> {
    readonly value: T;
    readonly ready: boolean;
    load(): Promise<T>;
    set(change: Partial<T>): Promise<void>;
}

interface PreferenceAnswer<T> {
    preferences: T;
    signedIn: boolean;
}

const cookieWord = /^[A-Za-z0-9_.-]+$/;

export function preferenceStore<T extends object>(
    path: string,
    state: PreferenceState<T>,
    defaults: T,
    cookies: Partial<Record<keyof T & string, string>> = {}
): PreferenceStore<T> {
    const bound = Object.entries(cookies) as [keyof T & string, string][];
    const memory = \`ktor-svelte-preferences:\${path}\`;
    let pending: Promise<T> | undefined;
    let signedIn = false;
    let turn = 0;
    let saving: Promise<void> = Promise.resolve();
    const remembered = (): Record<string, string | undefined> => {
        try {
            return JSON.parse(localStorage.getItem(memory) ?? '{}') as Record<string, string | undefined>;
        } catch {
            return {};
        }
    };
    const remember = (values: Record<string, string | undefined> | undefined) => {
        try {
            if (values) localStorage.setItem(memory, JSON.stringify(values));
            else localStorage.removeItem(memory);
        } catch {
            return;
        }
    };
    const cookieOf = (name: string): string | undefined =>
        typeof document === 'undefined' ? undefined : document.cookie.match(new RegExp(\`(?:^|; )\${name}=([^;]+)\`))?.[1];
    const show = (field: string, cookie: string, value: string): boolean => {
        if (cookieOf(cookie) === value) return false;
        document.cookie = \`\${cookie}=\${value}; path=/; max-age=31536000; samesite=lax\`;
        if (field === 'theme') document.documentElement.dataset.theme = value;
        return field !== 'theme';
    };
    const send = (shown: Record<string, string> = {}): Promise<void> => {
        const body = state.value;
        saving = saving
            .catch(() => undefined)
            .then(() => request<unknown>('PUT', path, { body }))
            .then(() => {
                if (Object.keys(shown).length > 0) remember({ ...remembered(), ...shown });
            });
        return saving;
    };
    const reconcile = (stored: T, before: Record<string, string | undefined>): T => {
        if (typeof document === 'undefined' || !signedIn || bound.length === 0) return stored;
        const last = remembered();
        const mine: Record<string, string> = {};
        let reload = false;
        for (const [field, cookie] of bound) {
            const here = cookieOf(cookie);
            const there = (stored as Record<string, unknown>)[field];
            const known = typeof there === 'string' && cookieWord.test(there) ? there : undefined;
            const picked = (field in last && here !== last[field]) || here !== before[field];
            const changedHere = here !== undefined && here !== known && (known === undefined || picked);
            if (changedHere) mine[field] = here;
            else if (known !== undefined && show(field, cookie, known)) reload = true;
            if (!changedHere) last[field] = known ?? here;
        }
        remember(last);
        if (reload) setTimeout(() => location.reload(), 0);
        if (Object.keys(mine).length === 0) return stored;
        const merged = { ...stored, ...mine } as T;
        state.value = merged;
        void send(mine).catch(() => undefined);
        return merged;
    };
    const ask = (): Promise<T> => {
        const mine = ++turn;
        const before: Record<string, string | undefined> = {};
        for (const [field, cookie] of bound) before[field] = cookieOf(cookie);
        const asked: Promise<T> = request<PreferenceAnswer<T>>('GET', path, { silent: true }).then(
            (answer) => {
                if (mine !== turn) return pending ?? state.value;
                signedIn = answer?.signedIn === true;
                state.value = { ...defaults, ...(answer?.preferences ?? {}) };
                state.ready = true;
                return reconcile(state.value, before);
            },
            () => {
                if (mine !== turn) return pending ?? state.value;
                pending = undefined;
                state.ready = true;
                return state.value;
            }
        );
        pending = asked;
        return asked;
    };
    const load = (): Promise<T> => {
        if (typeof document === 'undefined' && !apiConfig.fetch) return Promise.resolve(state.value);
        return pending ?? ask();
    };
    userWatchers.push({
        gone: () => {
            turn++;
            signedIn = false;
            pending = undefined;
            remember(undefined);
            state.value = { ...defaults };
        },
        changed: () => {
            remember(undefined);
            if (pending) void ask();
        }
    });
    if (typeof MutationObserver !== 'undefined' && typeof document !== 'undefined' && bound.length > 0) {
        new MutationObserver(() => {
            if (!signedIn || !state.ready) return;
            const moved: Record<string, string> = {};
            for (const [field, cookie] of bound) {
                const here = cookieOf(cookie);
                if (here !== undefined && here !== (state.value as Record<string, unknown>)[field]) moved[field] = here;
            }
            if (Object.keys(moved).length === 0) return;
            state.value = { ...state.value, ...moved } as T;
            void send(moved).catch(() => undefined);
        }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'lang'] });
    }
    return {
        get value() {
            if (!pending && typeof document !== 'undefined') void load();
            return state.value;
        },
        get ready() {
            return state.ready;
        },
        load,
        set: (change) => {
            state.value = { ...state.value, ...change };
            const shown: Record<string, string> = {};
            if (typeof document !== 'undefined') {
                for (const [field, cookie] of bound) {
                    const next = (change as Record<string, unknown>)[field];
                    if (typeof next !== 'string' || !cookieWord.test(next)) continue;
                    show(field, cookie, next);
                    shown[field] = next;
                }
            }
            return signedIn ? send(shown) : Promise.resolve();
        }
    };
}

export interface PageGuard<P extends string = string> {
    page: string;
    permission?: P;
}

export function matchGuard<P extends string>(guards: readonly PageGuard<P>[], path: string): PageGuard<P> | undefined {
    const clean = path.replace(/\\/+$/, '') || '/';
    let best: PageGuard<P> | undefined;
    for (const guard of guards) {
        const covers = clean === guard.page || clean.startsWith(\`\${guard.page}/\`);
        if (covers && (!best || guard.page.length > best.page.length)) best = guard;
    }
    return best;
}

export interface PageOf<T> {
    items: T[];
    next?: string | null;
    total?: number | null;
}

export async function* pages<Q extends { cursor?: string }, T>(
    load: (query: Q, options?: RequestOptions) => Promise<PageOf<T>>,
    query?: Omit<Q, 'cursor'>,
    options?: RequestOptions
): AsyncGenerator<T[], void, undefined> {
    let cursor: string | undefined;
    do {
        const page = await load({ ...query, cursor } as Q, options);
        yield page.items;
        cursor = page.next ?? undefined;
    } while (cursor !== undefined);
}

export interface BuildInfo {
    version?: string;
    commit?: string;
    time?: string;
}

let buildInfo: Promise<BuildInfo> | undefined;

export function loadBuildInfo(options?: RequestOptions): Promise<BuildInfo> {
    buildInfo ??= request<BuildInfo>('GET', '/_ktor-svelte/build.json', { ...options }).catch((error: unknown) => {
        buildInfo = undefined;
        throw error;
    });
    return buildInfo;
}

export function isAbortError(error: unknown): boolean {
    return error instanceof DOMException && error.name === 'AbortError';
}

export function latest<A extends unknown[], R>(call: (...args: A) => Promise<R>): (...args: A) => Promise<R> {
    let previous: AbortController | undefined;
    return (...args: A) => {
        previous?.abort();
        const current = new AbortController();
        previous = current;
        const arity = call.length;
        const padded = args.slice(0, arity);
        padded.length = arity;
        const options = (padded[arity - 1] ?? {}) as RequestOptions;
        const signal = options.signal ? AbortSignal.any([options.signal, current.signal]) : current.signal;
        padded[arity - 1] = { ...options, signal };
        return call(...(padded as A)).catch((error: unknown) => {
            if (signal.aborted && !isAbortError(error)) throw new DOMException('The request was superseded.', 'AbortError');
            throw error;
        });
    };
}

export async function prefetch(call: () => Promise<unknown>, ttl = 10_000): Promise<void> {
    prefetchUntil = Date.now() + ttl;
    let pending: Promise<unknown>;
    try {
        pending = call();
    } finally {
        prefetchUntil = undefined;
    }
    await pending.catch(() => undefined);
}

export function prefetchOnHover(node: HTMLElement, call: () => Promise<unknown>) {
    let current = call;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const now = () => {
        clearTimeout(timer);
        void prefetch(current);
    };
    const soon = () => {
        clearTimeout(timer);
        timer = setTimeout(now, 50);
    };
    const cancel = () => clearTimeout(timer);
    node.addEventListener('mouseenter', soon);
    node.addEventListener('mouseleave', cancel);
    node.addEventListener('focus', now);
    node.addEventListener('touchstart', now, { passive: true });
    return {
        update: (next: () => Promise<unknown>) => {
            current = next;
        },
        destroy: () => {
            cancel();
            node.removeEventListener('mouseenter', soon);
            node.removeEventListener('mouseleave', cancel);
            node.removeEventListener('focus', now);
            node.removeEventListener('touchstart', now);
        }
    };
}

export interface ApiFixture {
    method: string;
    path: string;
    status: number;
    request?: unknown;
    response?: unknown;
}

export interface ApiFixtures {
    recorded?: string;
    calls: ApiFixture[];
}

export function fixtureFetch(fixtures: ApiFixtures): typeof fetch {
    const answered = new Map<string, number>();
    return (async (input: RequestInfo | URL, init?: RequestInit) => {
        const address = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
        const url = new URL(address, 'http://fixtures.invalid');
        const method = (init?.method ?? (input instanceof Request ? input.method : 'GET')).toUpperCase();
        const wanted = \`\${method} \${url.pathname}\${url.search}\`;
        const recorded = fixtures.calls.filter((call) => \`\${call.method.toUpperCase()} \${call.path}\` === wanted);
        if (recorded.length === 0) {
            throw new Error(\`No fixture for \${wanted}. Make that call in the app, then save the fixtures from the dev panel again.\`);
        }
        const turn = answered.get(wanted) ?? 0;
        answered.set(wanted, turn + 1);
        const call = recorded[Math.min(turn, recorded.length - 1)];
        const empty = call.response === undefined || call.status === 204;
        const text = typeof call.response === 'string';
        return new Response(empty ? null : text ? (call.response as string) : JSON.stringify(call.response), {
            status: call.status,
            headers: empty ? {} : { 'content-type': text ? 'text/plain' : 'application/json' }
        });
    }) as typeof fetch;
}

export interface CookieRules<T> {
    kind: 'string' | 'int' | 'number' | 'boolean' | 'enum';
    values?: readonly string[];
    default?: T;
    maxAge?: number;
    path: string;
    sameSite: 'lax' | 'strict' | 'none';
    secure: boolean;
    category?: string;
}

export interface TypedCookie<T, D extends T | undefined = undefined> {
    readonly name: string;
    readonly rules: CookieRules<T>;
    get(header?: string): T | D;
    set(value: T): void;
    clear(): void;
}

const CONSENT_COOKIE = 'cookie-consent';
const CONSENT_SECONDS = 15552000;

function cookieText(name: string, header?: string): string | undefined {
    const source = header ?? (typeof document === 'undefined' ? '' : document.cookie);
    return source
        .split(/;\\s*/)
        .find((part) => part.startsWith(\`\${name}=\`))
        ?.slice(name.length + 1);
}

function consentAllows(category: string | undefined, header?: string): boolean {
    return category === undefined || (cookieText(CONSENT_COOKIE, header)?.split('.').includes(category) ?? false);
}

function cookieValue(raw: string, rules: CookieRules<unknown>): unknown {
    let text: string;
    try {
        text = decodeURIComponent(raw);
    } catch {
        return undefined;
    }
    if (rules.kind === 'string') return text;
    if (rules.kind === 'boolean') return text === 'true' ? true : text === 'false' ? false : undefined;
    if (rules.kind === 'enum') return rules.values?.includes(text) ? text : undefined;
    const number = text.trim() === '' ? NaN : Number(text);
    if (!Number.isFinite(number)) return undefined;
    return rules.kind === 'int' && !Number.isInteger(number) ? undefined : number;
}

export function typedCookie<T, D extends T | undefined = undefined>(name: string, rules: CookieRules<T>): TypedCookie<T, D> {
    const attributes = \`; path=\${rules.path}; samesite=\${rules.sameSite}\${rules.secure ? '; secure' : ''}\`;
    return {
        name,
        rules,
        get(header) {
            const found = consentAllows(rules.category, header) ? cookieText(name, header) : undefined;
            const value = found === undefined ? undefined : cookieValue(found, rules);
            return (value ?? rules.default) as T | D;
        },
        set(value) {
            if (!consentAllows(rules.category)) return;
            const age = rules.maxAge === undefined ? '' : \`; max-age=\${rules.maxAge}\`;
            document.cookie = \`\${name}=\${encodeURIComponent(String(value))}\${attributes}\${age}\`;
        },
        clear() {
            document.cookie = \`\${name}=\${attributes}; max-age=0\`;
        }
    };
}

export interface ConsentState<C extends string> {
    decided: boolean;
    accepted: readonly C[];
}

export interface ConsentBannerOptions<C extends string> {
    text: string;
    accept: string;
    refuse: string;
    title?: string;
    labels?: Partial<Record<C, string>>;
    save?: string;
    link?: { href: string; text: string };
}

export interface ConsentStore<C extends string> {
    readonly categories: readonly C[];
    decided(): boolean;
    allows(category: C): boolean;
    accept(categories?: readonly C[]): void;
    refuse(): void;
    reset(): void;
    subscribe(run: (state: ConsentState<C>) => void): () => void;
    banner(options: ConsentBannerOptions<C>): () => void;
}

export function consentStore<C extends string>(
    categories: readonly C[],
    optional: readonly { name: string; path: string; category: C }[]
): ConsentStore<C> {
    const listeners = new Set<(state: ConsentState<C>) => void>();

    function state(): ConsentState<C> {
        const chosen = cookieText(CONSENT_COOKIE)?.split('.');
        return { decided: chosen !== undefined, accepted: categories.filter((category) => chosen?.includes(category)) };
    }

    function changed(): void {
        const accepted = state().accepted;
        for (const cookie of optional) {
            if (!accepted.includes(cookie.category)) document.cookie = \`\${cookie.name}=; path=\${cookie.path}; max-age=0\`;
        }
        const now = state();
        listeners.forEach((run) => run(now));
    }

    const store: ConsentStore<C> = {
        categories,
        decided: () => state().decided,
        allows: (category) => state().accepted.includes(category),
        accept(chosen = categories) {
            const kept = categories.filter((category) => chosen.includes(category));
            document.cookie = \`\${CONSENT_COOKIE}=\${kept.length === 0 ? 'none' : kept.join('.')}; path=/; samesite=lax; max-age=\${CONSENT_SECONDS}\`;
            changed();
        },
        refuse() {
            store.accept([]);
        },
        reset() {
            document.cookie = \`\${CONSENT_COOKIE}=; path=/; samesite=lax; max-age=0\`;
            changed();
        },
        subscribe(run) {
            listeners.add(run);
            run(state());
            return () => void listeners.delete(run);
        },
        banner(options) {
            if (typeof document === 'undefined' || store.decided()) return () => undefined;
            const box = document.createElement('div');
            box.className = 'ktor-svelte-consent';
            box.setAttribute('role', 'region');
            box.setAttribute('aria-label', options.title ?? 'Cookies');
            Object.assign(box.style, {
                position: 'fixed',
                inset: 'auto 0 0 0',
                zIndex: '2147483000',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 16px',
                background: 'Canvas',
                color: 'CanvasText',
                borderTop: '1px solid GrayText'
            });
            const text = document.createElement('p');
            text.style.margin = '0';
            text.textContent = options.text;
            if (options.link) {
                const link = document.createElement('a');
                link.className = 'link';
                link.href = options.link.href;
                link.textContent = options.link.text;
                text.append(' ', link);
            }
            box.append(text);
            const boxes = new Map<C, HTMLInputElement>();
            for (const category of categories) {
                const name = options.labels?.[category];
                if (name === undefined) continue;
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.className = 'checkbox checkbox-sm';
                input.value = category;
                label.append(input, \` \${name}\`);
                boxes.set(category, input);
                box.append(label);
            }
            const close = () => box.remove();
            const button = (label: string, className: string, run: () => void) => {
                const node = document.createElement('button');
                node.type = 'button';
                node.className = className;
                node.textContent = label;
                node.addEventListener('click', () => {
                    run();
                    close();
                });
                box.append(node);
            };
            button(options.refuse, 'btn btn-sm', () => store.refuse());
            if (boxes.size > 0 && options.save !== undefined) {
                button(options.save, 'btn btn-sm', () => store.accept([...boxes].filter(([, input]) => input.checked).map(([category]) => category)));
            }
            button(options.accept, 'btn btn-sm btn-primary', () => store.accept());
            document.body.append(box);
            return close;
        }
    };
    return store;
}

`),j("dates.ts",`declare const iso: unique symbol;

const pad = (value: number, width = 2) => String(value).padStart(width, '0');

export type IsoDate = string & { readonly [iso]: 'date' };

export const IsoDate = {
    parse: (value: IsoDate): Date => {
        const [year, month, day] = value.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        date.setFullYear(year);
        return date;
    },
    from: (date: Date): IsoDate => \`\${pad(date.getFullYear(), 4)}-\${pad(date.getMonth() + 1)}-\${pad(date.getDate())}\` as IsoDate,
    today: (): IsoDate => IsoDate.from(new Date()),
};

export type IsoTime = string & { readonly [iso]: 'time' };

export const IsoTime = {
    from: (date: Date): IsoTime => \`\${pad(date.getHours())}:\${pad(date.getMinutes())}:\${pad(date.getSeconds())}\` as IsoTime,
};

export type IsoDateTime = string & { readonly [iso]: 'date-time' };

export const IsoDateTime = {
    parse: (value: IsoDateTime): Date => new Date(value),
    from: (date: Date): IsoDateTime => date.toISOString() as IsoDateTime,
    fromLocal: (date: Date): IsoDateTime => \`\${IsoDate.from(date)}T\${IsoTime.from(date)}\` as IsoDateTime,
    now: (): IsoDateTime => IsoDateTime.from(new Date()),
};
`),j("form-state.svelte.ts",`import { tick, untrack } from 'svelte';
import { errorMessage, isValidationError, isVersionConflict, type RequestOptions } from './client.js';

export type FieldErrors = Record<string, string[]>;

export type FieldCheckRoute = (query: { value: string }, options?: RequestOptions) => Promise<{ message?: string | null }>;

export interface FieldChange {
    field: string;
    from: unknown;
    to: unknown;
}

export interface FormStateOptions<T> {
    validate?: (draft: T) => FieldErrors | null | undefined;
    resetOnSuccess?: boolean;
    checks?: Partial<Record<keyof T & string, FieldCheckRoute>>;
    checkDelay?: number;
    focusErrors?: boolean;
}

export interface FormState<T> {
    draft: T;
    readonly dirty: boolean;
    readonly changes: FieldChange[];
    changed(field: keyof T & string): boolean;
    readonly submitting: boolean;
    readonly checking: boolean;
    readonly errors: FieldErrors;
    readonly error: unknown;
    readonly message: string;
    readonly conflict: unknown;
    keepMine(): void;
    takeTheirs(next?: T): void;
    reset(next?: T): void;
    submit<R>(send: (draft: T) => Promise<R>): Promise<R | undefined>;
    focusFirstError(): Promise<void>;
}

export function formState<T extends object>(initial: T, options: FormStateOptions<T> = {}): FormState<T> {
    let saved = $state.raw($state.snapshot(initial) as T);
    let draft = $state($state.snapshot(initial) as T);
    let baseline = $state(JSON.stringify(initial));
    let submitting = $state(false);
    let errors = $state.raw<FieldErrors>({});
    let failure = $state.raw<unknown>(undefined);
    let checked = $state.raw<FieldErrors>({});
    let conflict = $state.raw<unknown>(undefined);
    let checking = $state(0);
    const dirty = $derived(JSON.stringify(draft) !== baseline);
    const changes = $derived.by(() => {
        const before = saved as Record<string, unknown>;
        const after = draft as Record<string, unknown>;
        const fields = [...new Set([...Object.keys(before), ...Object.keys(after)])];
        return fields
            .filter((name) => JSON.stringify(before[name] ?? null) !== JSON.stringify(after[name] ?? null))
            .map((name) => ({ field: name, from: before[name], to: $state.snapshot(after[name]) }));
    });
    const shown = $derived.by(() => {
        const merged: FieldErrors = { ...errors };
        for (const [name, messages] of Object.entries(checked)) merged[name] = [...(merged[name] ?? []), ...messages];
        return merged;
    });

    function textOf(holder: T, name: string): string {
        return String((holder as Record<string, unknown>)[name] ?? '');
    }

    function watch(name: string, ask: FieldCheckRoute) {
        $effect(() => {
            const value = textOf(draft, name);
            untrack(() => {
                if (!(name in checked)) return;
                const rest = { ...checked };
                delete rest[name];
                checked = rest;
            });
            if (value === '' || value === textOf(saved, name)) return;
            const controller = new AbortController();
            const timer = setTimeout(() => {
                checking += 1;
                ask({ value }, { signal: controller.signal, silent: true })
                    .then((answer) => {
                        if (!controller.signal.aborted && answer.message) checked = { ...checked, [name]: [answer.message] };
                    })
                    .catch(() => undefined)
                    .finally(() => {
                        checking -= 1;
                    });
            }, options.checkDelay ?? 300);
            return () => {
                clearTimeout(timer);
                controller.abort();
            };
        });
    }

    for (const [name, ask] of Object.entries(options.checks ?? {})) {
        if (ask) watch(name, ask as FieldCheckRoute);
    }

    async function focusFirstError() {
        if (typeof document === 'undefined') return;
        await tick();
        const first = document.querySelector<HTMLElement>('[aria-invalid="true"]');
        if (!first) return;
        first.focus({ preventScroll: true });
        first.scrollIntoView({ block: 'center' });
    }

    function settle(value: T) {
        saved = $state.snapshot(value) as T;
        baseline = JSON.stringify(saved);
    }

    function reset(next?: T) {
        if (next !== undefined) settle(next);
        draft = $state.snapshot(saved) as T;
        errors = {};
        checked = {};
        failure = undefined;
        conflict = undefined;
    }

    function keepMine() {
        const theirs = conflict as { version?: unknown } | undefined;
        if (theirs === undefined) return;
        (draft as { version?: unknown }).version = theirs.version;
        conflict = undefined;
        failure = undefined;
    }

    function takeTheirs(next?: T) {
        if (conflict === undefined) return;
        reset(next ?? (conflict as T));
    }

    async function submit<R>(send: (draft: T) => Promise<R>): Promise<R | undefined> {
        if (submitting) return undefined;
        const sending = $state.snapshot(draft) as T;
        const invalid = options.validate?.(sending);
        failure = undefined;
        conflict = undefined;
        if (invalid && Object.keys(invalid).length > 0) {
            errors = invalid;
            if (options.focusErrors !== false) void focusFirstError();
            return undefined;
        }
        errors = {};
        if (Object.keys(checked).length > 0) return undefined;
        submitting = true;
        try {
            const result = await send(sending);
            if (options.resetOnSuccess) reset();
            else if (JSON.stringify(draft) === JSON.stringify(sending)) settle(sending);
            return result;
        } catch (error) {
            if (isValidationError(error)) {
                errors = error.body.fields ?? {};
                if (options.focusErrors !== false) void focusFirstError();
            } else {
                failure = error;
            }
            if (isVersionConflict(error)) conflict = error.body.current;
            return undefined;
        } finally {
            submitting = false;
        }
    }

    return {
        get draft() {
            return draft;
        },
        set draft(value: T) {
            draft = value;
        },
        get dirty() {
            return dirty;
        },
        get changes() {
            return changes;
        },
        changed(name: keyof T & string) {
            return changes.some((change) => change.field === name);
        },
        get submitting() {
            return submitting;
        },
        get checking() {
            return checking > 0;
        },
        get errors() {
            return shown;
        },
        get error() {
            return failure;
        },
        get message() {
            return failure === undefined ? '' : errorMessage(failure);
        },
        get conflict() {
            return conflict;
        },
        keepMine,
        takeTheirs,
        reset,
        submit,
        focusFirstError
    };
}
`),j("form.ts",`export interface FieldBounds {
    required?: boolean;
    minlength?: number;
    maxlength?: number;
    min?: number;
    max?: number;
    pattern?: string;
}

export interface FieldOptions {
    bounds?: FieldBounds;
    errors?: string[];
    errorClass?: string;
    describedBy?: string;
}

type FieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

let fieldCount = 0;

const typedBeforeHydration = new WeakMap<EventTarget, string>();
let remembering = false;

function remember(node: EventTarget | null) {
    const textInput = (node instanceof HTMLInputElement && node.type !== 'file') || node instanceof HTMLTextAreaElement;
    if (!textInput) return;
    if (node.value === node.defaultValue) typedBeforeHydration.delete(node);
    else typedBeforeHydration.set(node, node.value);
}

function rememberInput(event: Event) {
    remember(event.target);
}

if (typeof document !== 'undefined') {
    document.querySelectorAll('input, textarea').forEach(remember);
    document.addEventListener('input', rememberInput, true);
    remembering = true;
}

function restoreTypedValue(node: FieldElement) {
    if (remembering) {
        remembering = false;
        queueMicrotask(() => document.removeEventListener('input', rememberInput, true));
    }
    const typed = typedBeforeHydration.get(node);
    if (typed === undefined) return;
    typedBeforeHydration.delete(node);
    if (node.value === typed) return;
    node.value = typed;
    node.dispatchEvent(new Event('input', { bubbles: true }));
}

export function field(node: FieldElement, options: FieldOptions = {}) {
    const message = document.createElement('p');
    message.id = \`ktor-svelte-field-\${++fieldCount}\`;
    message.setAttribute('role', 'alert');
    const applied = new Set<string>();

    function apply({ bounds = {}, errors = [], errorClass = 'field-error', describedBy }: FieldOptions) {
        applied.forEach((name) => node.removeAttribute(name));
        applied.clear();
        for (const [name, value] of Object.entries(bounds)) {
            if (value === undefined || value === false) continue;
            node.setAttribute(name, value === true ? '' : String(value));
            applied.add(name);
        }
        const text = errors.join(' ');
        message.className = errorClass;
        message.textContent = text;
        if (text === '') {
            node.removeAttribute('aria-invalid');
            if (describedBy) node.setAttribute('aria-describedby', describedBy);
            else node.removeAttribute('aria-describedby');
            message.remove();
            return;
        }
        node.setAttribute('aria-invalid', 'true');
        node.setAttribute('aria-describedby', describedBy ? \`\${describedBy} \${message.id}\` : message.id);
        if (!message.isConnected) node.after(message);
    }

    apply(options);
    restoreTypedValue(node);
    return { update: apply, destroy: () => message.remove() };
}
`),j("index.ts",`export * from './client.js';
export * from './form.js';
export * from './services.js';
export * from './types.js';
`),j("matches.ts",`function matches(pattern: string, text: string): boolean {
    try {
        return new RegExp(pattern, 'u').test(text);
    } catch {
        return true;
    }
}
`),j("pending-writes.svelte.ts",`import { watchPendingWrites } from './client.js';

let count = $state(0);

watchPendingWrites((pending) => {
    count = pending;
});

export const pendingWrites = {
    get active(): boolean {
        return count > 0;
    },
    get count(): number {
        return count;
    }
};

export function warnBeforeLeaving(): () => void {
    if (typeof window === 'undefined') return () => undefined;
    const listener = (event: BeforeUnloadEvent) => {
        if (count === 0) return;
        event.preventDefault();
        event.returnValue = '';
    };
    window.addEventListener('beforeunload', listener);
    return () => window.removeEventListener('beforeunload', listener);
}
`),j("public-config.ts",`let publicConfig: Promise<PublicConfig> | undefined;

export function readPublicConfig(): PublicConfig | undefined {
    if (typeof document === 'undefined') return undefined;
    const element = document.getElementById('ktor-svelte-config');
    if (!element?.textContent) return undefined;
    return JSON.parse(element.textContent) as PublicConfig;
}

export function loadPublicConfig(options?: RequestOptions): Promise<PublicConfig> {
    const inline = readPublicConfig();
    if (inline) return Promise.resolve(inline);
    publicConfig ??= request<PublicConfig>('GET', '/_ktor-svelte/config.json', { ...options });
    return publicConfig;
}

`),j("quantities.ts",`export type IsoDuration = string & { readonly [brand]: 'IsoDuration' };

const DURATION = /^(-)?P(?:(\\d+)D)?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$/;

const two = (value: number) => String(value).padStart(2, '0');

export const IsoDuration = {
    toMillis: (value: IsoDuration): number => {
        const parts = DURATION.exec(value);
        if (!parts) return NaN;
        const [, sign, days, hours, minutes, seconds] = parts;
        const total =
            Number(days ?? 0) * 86_400_000 + Number(hours ?? 0) * 3_600_000 + Number(minutes ?? 0) * 60_000 + Math.round(Number(seconds ?? 0) * 1000);
        return sign ? -total : total;
    },
    fromMillis: (millis: number): IsoDuration => {
        const total = Math.abs(Math.round(millis));
        const hours = Math.floor(total / 3_600_000);
        const minutes = Math.floor((total % 3_600_000) / 60_000);
        const seconds = (total % 60_000) / 1000;
        const time = \`\${hours ? \`\${hours}H\` : ''}\${minutes ? \`\${minutes}M\` : ''}\${seconds || total === 0 ? \`\${seconds}S\` : ''}\`;
        return \`\${millis < 0 && total > 0 ? '-' : ''}PT\${time}\` as IsoDuration;
    },
    add: (first: IsoDuration, second: IsoDuration): IsoDuration => IsoDuration.fromMillis(IsoDuration.toMillis(first) + IsoDuration.toMillis(second)),
    format: (value: IsoDuration): string => {
        const millis = IsoDuration.toMillis(value);
        const total = Math.floor(Math.abs(millis) / 1000);
        const clock = \`\${Math.floor(total / 3600)}:\${two(Math.floor((total % 3600) / 60))}:\${two(total % 60)}\`;
        return millis < 0 && total > 0 ? \`-\${clock}\` : clock;
    },
};

export type Decimal = string & { readonly [brand]: 'Decimal' };

const DECIMAL = /^-?\\d+(?:\\.\\d+)?$/;

const scaleOf = (value: string) => (value.split('.')[1] ?? '').length;

function digitsOf(value: string, scale: number): bigint {
    const negative = value.startsWith('-');
    const [whole, fraction = ''] = (negative ? value.slice(1) : value).split('.');
    const digits = BigInt(whole + fraction.padEnd(scale, '0'));
    return negative ? -digits : digits;
}

function decimalOf(digits: bigint, scale: number): Decimal {
    const negative = digits < BigInt(0);
    const text = (negative ? -digits : digits).toString().padStart(scale + 1, '0');
    const fraction = scale > 0 ? \`.\${text.slice(text.length - scale)}\` : '';
    return \`\${negative ? '-' : ''}\${text.slice(0, text.length - scale)}\${fraction}\` as Decimal;
}

function combine(first: Decimal, second: Decimal, sign: 1 | -1): Decimal {
    const scale = Math.max(scaleOf(first), scaleOf(second));
    return decimalOf(digitsOf(first, scale) + BigInt(sign) * digitsOf(second, scale), scale);
}

export const Decimal = {
    from: (value: string | number): Decimal => {
        const text = typeof value === 'number' ? String(value) : value.trim();
        if (!DECIMAL.test(text)) throw new RangeError(\`'\${text}' is not a decimal number such as 12.50.\`);
        return text as Decimal;
    },
    toNumber: (value: Decimal): number => Number(value),
    add: (first: Decimal, second: Decimal): Decimal => combine(first, second, 1),
    subtract: (first: Decimal, second: Decimal): Decimal => combine(first, second, -1),
    times: (value: Decimal, count: number): Decimal => {
        if (!Number.isInteger(count)) throw new RangeError(\`Decimal.times takes a whole number, but got \${count}.\`);
        const scale = scaleOf(value);
        return decimalOf(digitsOf(value, scale) * BigInt(count), scale);
    },
    compare: (first: Decimal, second: Decimal): number => {
        const scale = Math.max(scaleOf(first), scaleOf(second));
        const difference = digitsOf(first, scale) - digitsOf(second, scale);
        return difference < BigInt(0) ? -1 : difference > BigInt(0) ? 1 : 0;
    },
    format: (value: Decimal, locale?: string, options?: Intl.NumberFormatOptions): string =>
        new Intl.NumberFormat(locale, { minimumFractionDigits: scaleOf(value), ...options }).format(value as unknown as number),
};
`)]))}function nA(n,r){var e;try{for(var t=new Ny(On(r)).f1l(n),i=Ie(),a=tc.t17(),s=vr.ha(t.c1()),o=t.r2().x();o.y();){var u=o.z(),c=u.k2(),f=re(u.l2());s.s2(c,f)}e=i.k15(a,new nr(xo(j("files",new nr(s)))))}catch(w){var v;if(w instanceof Error){var h=w,d=Ie(),_=tc.t17(),m=h.message;v=d.k15(_,new nr(xo(j("error",re(m??h.toString())))))}else throw w;e=v}return e}p(Ey,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(zy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(_c,"EnumType");p(Iy,"EnumUsage");p(Cy,"Endpoint");p(Ay,"ErrorEntry");p(Ty,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(qy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(Oy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(jy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(Uy);p(Ny,"TypeScriptGenerator");p(po,"ValidationHelper");p(uu,"GeneratedOperation");p(Dy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);D(Ly,"ConstraintMessages");p(He,"RuleCheck");p(Vi,"RulePreset");D(Py,"RulePresets");Xi=new Ly;export{nA as generateTypeScript};
