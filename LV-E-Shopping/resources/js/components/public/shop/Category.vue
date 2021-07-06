<template>
<div class="pages about-us section-padding">
    <div class="container">
        <div class="row">
            <div class="main-padding section-padding-top clearfix">

                <div class="col-sm-12 col-md-12">
                    <el-table ref="multipleTable" :data="categories.data" style="width: 100%" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column label="Date" width="120">
                            <template slot-scope="scope">{{ scope.row.created_at }}</template>
                        </el-table-column>
                        <el-table-column property="name" label="Name" width="120">
                        </el-table-column>
                        <el-table-column label="Actions" fixed="right">
                            <template slot-scope="scope">
                                <el-button @click.prevent="editCategory(scope.row)" type="text" size="small">View Products</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-pagination class="text-center" background @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="categories.per_page" layout="prev, pager, next" :total="categories.total">
                    </el-pagination>

                    <div style="margin-top: 20px">
                        <el-button @click="toggleSelection([tableData[1], tableData[2]])">Toggle selection status of second and third rows</el-button>
                        <el-button @click="toggleSelection()">Clear selection</el-button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Category',
    data() {
        return {
            currentPage: 1,
            multipleSelection: [],
            categoryDialog: false,
            form: {
                name: ''
            },
            errors: {}
        }
    },

    methods: {
        handleCurrentChange() {
            this.$store.dispatch('category/categoryList',this.currentPage)

        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
       
        categoryList() {
            this.$store.dispatch('category/categoryList',this.currentPage)
        }

    },
    created() {
        this.categoryList();
    },
    computed: {
        categories() {
            return this.$store.getters['category/categoryList']
        }
    }

}
</script>

<style>

</style>
