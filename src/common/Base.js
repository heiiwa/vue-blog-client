var CryptoJS=require("crypto-js");
    export default {
        data () {
            return {
                modal1:false,
                ids:[],
                list:[],
                filter:{
                    page:1,
                    limit:5,
                    name:'',
                    total:0
                },
                self:this,
            }
        },
        methods: {
            edit (index) {
               var _this=this;
               var dataobj=Object.assign({},_this.list[index]);
               _this.modal1=true;
               _this.formValidate=dataobj;
            },
            remove (index) {
                var _this=this;
                this.$Modal.confirm({
                    title:'确认删除数据',
                    content:'<P>确认删除数据</P>',
                    onOk: () => {
                        let deleteUrl=`http://localhost:3000/${_this.model}/`+_this.list[index]._id;
                            console.log(_this.list[index]._id)
                        _this.$http.delete(deleteUrl).then(response=>{
                            _this.gettData();
                            this.$Message.info('删除成功');
                        })
                    },
                    onCancel: () => {
                        this.$Message.info('取消删除');
                    }
                });
            },
            removes () {
                var _this=this;
                if(_this.ids.length>0){
                    this.$Modal.confirm({
                    title:'确认删除数据',
                    content:'<P>确认删除数据</P>',
                    onOk: () => {
                        let deleteUrl=`http://localhost:3000/${_this.model}/removes`;
                        _this.$http.post(deleteUrl,{ids:_this.ids}).then(response=>{
                            _this.gettData();
                            this.$Message.info('删除成功');
                        })
                    },
                    onCancel: () => {
                        this.$Message.info('取消删除');
                    }
                });
                }else{
                    alert('请选择要删除的数据');
                }
                
            },
            search(){
                var _this=this;
                _this.gettData();
            },
            changePage (page) {
                console.log(page);
            },
            changePage(page){
                var _this=this;
                _this.filter.page=page;
                _this.gettData();
            },
            handleSubmit(name){
                var _this=this;
                var submitUrl,submitMethod;
                if(_this.formValidate._id!=null){
                    submitUrl=`http://localhost:3000/${_this.model}/data/`+_this.formValidate._id;
                    submitMethod='PUT';
                }else{
                    submitUrl=`http://localhost:3000/${_this.model}/data/`;
                    submitMethod='POST';
                }
                _this.$refs[name].validate((valid)=>{
                    if(valid){
                        _this.formValidate.password=CryptoJS.MD5(_this.formValidate.password,{asString:true}).toString();
                        _this.$http({
                            url:submitUrl,
                            method:submitMethod,
                            data:_this.formValidate
                        }).then(function(response){
                            console.log(123);
                           _this.$Message.success('提交成功');
                           _this.modal1=false;
                           _this.gettData();
                           Object.assign(_this.$data.formValidate,_this.$options.data().formValidate);//初始化状态
                      })  
                    }else{
                        this.$Message.error('表单验证失败');
                    }
                })
            },
            handleSelectionChange(selection){
                var _this=this;
                if(selection&&selection.length>0){
                    var ids=[];
                    let selectionLen=selection.length;
                    for(let i=0;i<selectionLen;i++){
                        ids.push(selection[i]._id)
                    }
                    _this.ids=ids;
                    // console.log(_this.ids);
                    console.log(ids);
                }
               
            },
            handleReset(name){
                this.$refs[name].resetFields();
            },
            gettData(){
                var _this = this;
                console.log(_this.model);
                _this.$http.get(`http://localhost:3000/${_this.model}/list/${_this.filter.page}/${_this.filter.limit}`).then(function(content){
                   _this.list=content.data.docs;
                   _this.filter.total=content.data.total;
                }).catch ( function (error){
                    console.log(error);
                });
            }
        },
        created(){
                this.gettData();
            }
    }
