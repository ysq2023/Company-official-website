<template>
  <img
    src="../../src/assets/img/banner1.png"
    alt=""
  />
  <div class="intro-box">
    <h2 class="intro-title">公司介绍</h2>
    <div class="intro-main">
      <div class="intro-left">
        <pre>{{intro.text}}</pre>
        <pre>{{this.publicize}}</pre>
		<pre>{{this.advantage1}}</pre>
		<pre>{{this.advantage2}}</pre>
		<pre>{{this.advantage3}}</pre>
        
        <pre>"苍南频键网络科技，引领算法备案新纪元，为您的业务安全护航，共创数字未来！"</pre>
      </div>
      <div class="intro-right">
        <img
          src="../../src/assets/img/place.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
		 publicize:"算法备案服务：作为公司的主营业务，苍南频键网络科技有限公司致力于为客户提供全面、专业的算法备案服务。公司拥有一支熟悉互联网信息服务算法备案流程及要求的专业团队，能够协助客户高效、准确地完成算法备案工作。服务范围涵盖算法安全责任人的指定、算法相关制度和组织的建立、算法对隐私保护和数据安全的保障措施制定等多个方面。",
		advantage1:"专业团队：公司拥有一支由算法专家、法律顾问、技术人员等组成的专业团队，具备丰富的行业经验和专业知识。",	 
		advantage2:"高效服务：公司建立了完善的服务流程和管理体系，能够为客户提供快速、准确、高效的服务。",  
		advantage3:"全面支持：公司不仅提供算法备案服务，还为客户提供技术咨询、开发、合规指导等全方位支持，助力客户实现可持续发展。"   
	};
  },

  computed: {
    ...mapGetters(["intro"]),
	 
  },
};
</script>

<style lang="less">
.intro-box {
  padding-left: 10rem;
  padding-right: 10rem;
  
  // border: 1px soild red;
}
.intro-main {
  display: flex;
}

.intro-left {
  width: 50%;
  // padding-right: 3rem;
  pre {
	// border: 1px  solid red;
    white-space: pre-wrap;
    text-align: left;
    font-size: 2.0rem;
    margin-top: 0;
    line-height: 2.4rem;
  }
}

.intro-right {
  width: 50%;
  padding-left: 3rem;
  img {
    width: 100%;
	height: 80%;
	 
  }
}

.intro-title {
  text-align: left;
}
</style>
